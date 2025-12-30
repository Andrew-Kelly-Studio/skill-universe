import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, ChevronRight, X, ExternalLink, Github, Youtube, FileText, Briefcase, Plus } from 'lucide-react';

const SkillUniverse = () => {
  const [currentView, setCurrentView] = useState('universe');
  const [selectedGalaxy, setSelectedGalaxy] = useState(null);
  const [selectedConstellation, setSelectedConstellation] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  
  // State for loaded data
  const [galaxies, setGalaxies] = useState([]);
  const [allConstellations, setAllConstellations] = useState({}); // Store ALL constellation data
  const [allSkills, setAllSkills] = useState({}); // Store ALL skills data
  const [portfolioEvidence, setPortfolioEvidence] = useState({});
  const [loading, setLoading] = useState(true);

  // Load data from JSON files
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load universe data (galaxies and constellations)
        const universeResponse = await fetch('/data/universe.json');
        const universeData = await universeResponse.json();
        setGalaxies(universeData.galaxies || []);
        setAllConstellations(universeData.constellations || {}); // Store all constellation data

        // Load skills data
        const skillsResponse = await fetch('/data/skills.json');
        const skillsData = await skillsResponse.json();
        setAllSkills(skillsData || {}); // Store all skills data

        // Load portfolio evidence
        const portfolioResponse = await fetch('/data/portfolio.json');
        const portfolioData = await portfolioResponse.json();
        // Filter out the _comment and _example fields
        const cleanedPortfolio = {};
        Object.keys(portfolioData).forEach(key => {
          if (!key.startsWith('_')) {
            cleanedPortfolio[key] = portfolioData[key];
          }
        });
        setPortfolioEvidence(cleanedPortfolio);

        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Navigation functions
  const navigateToGalaxy = (galaxy) => {
    setSelectedGalaxy(galaxy);
    setCurrentView('galaxy');
  };

  const navigateToConstellation = (constellation) => {
    setSelectedConstellation(constellation);
    setCurrentView('constellation');
  };

  const navigateBack = () => {
    if (currentView === 'constellation') {
      setCurrentView('galaxy');
      setSelectedConstellation(null);
      setSelectedSkill(null);
    } else if (currentView === 'galaxy') {
      setCurrentView('universe');
      setSelectedGalaxy(null);
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading your Skill Universe...</div>
      </div>
    );
  }

  // Render functions for each view
  const renderUniverseView = () => (
    <UniverseView galaxies={galaxies} onSelectGalaxy={navigateToGalaxy} />
  );

  const renderGalaxyView = () => {
    // Get constellations for the selected galaxy
    const constellations = selectedGalaxy ? (allConstellations[selectedGalaxy.id] || []) : [];
    
    return (
      <GalaxyView 
        galaxy={selectedGalaxy} 
        constellations={constellations}
        onBack={navigateBack}
        onSelectConstellation={navigateToConstellation}
      />
    );
  };

  const renderConstellationView = () => {
    // Get skills for the selected constellation
    const skills = selectedConstellation ? (allSkills[selectedConstellation.id] || { foundation: [], intermediate: [], advanced: [] }) : { foundation: [], intermediate: [], advanced: [] };
    
    return (
      <ConstellationView
        constellation={selectedConstellation}
        skills={skills}
        portfolioEvidence={portfolioEvidence}
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
        onBack={navigateBack}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900">
      {currentView === 'universe' && renderUniverseView()}
      {currentView === 'galaxy' && renderGalaxyView()}
      {currentView === 'constellation' && renderConstellationView()}
    </div>
  );
};

// UNIVERSE VIEW COMPONENT
const UniverseView = ({ galaxies, onSelectGalaxy }) => {
  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-8xl mb-6">✨</div>
          <h1 className="text-7xl font-bold text-white mb-6">
            Andrew Kelly
          </h1>
          <p className="text-3xl text-purple-200 mb-4">
            Skill Universe Portfolio
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my expertise across marketing operations, coffee craft, and competitive billiards
          </p>
        </div>

        {/* Galaxies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {galaxies.map(galaxy => {
            const progress = Math.round((galaxy.completedSkills / galaxy.totalSkills) * 100);
            
            return (
              <button
                key={galaxy.id}
                onClick={() => onSelectGalaxy(galaxy)}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur border-2 border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                style={{
                  boxShadow: '0 0 40px rgba(139, 92, 246, 0.3)'
                }}
              >
                {/* Icon */}
                <div className="text-8xl mb-4 transform group-hover:scale-110 transition-transform">
                  {galaxy.icon}
                </div>

                {/* Name */}
                <h2 className="text-3xl font-bold text-white mb-3">
                  {galaxy.name}
                </h2>

                {/* Description */}
                <p className="text-gray-300 mb-6 min-h-[60px]">
                  {galaxy.description}
                </p>

                {/* Stats */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-400">Constellations</span>
                    <span className="text-white font-bold">{galaxy.constellationCount}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-400">Skills</span>
                    <span className="text-white font-bold">{galaxy.totalSkills}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-400">Mastered</span>
                    <span className="text-green-400 font-bold">{galaxy.completedSkills}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-purple-400 font-bold">{progress}%</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white/10 rounded-full h-4 mb-6 overflow-hidden">
                  <div
                    className="h-4 rounded-full transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: galaxy.color
                    }}
                  />
                </div>

                {/* CTA */}
                <div className="flex items-center justify-center gap-2 text-purple-300 font-semibold group-hover:text-purple-200 transition-colors">
                  <span>Explore Galaxy</span>
                  <ChevronRight size={20} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="text-center">
          <p className="text-gray-400">
            Click any galaxy to explore its constellations and skills
          </p>
        </div>
      </div>
    </div>
  );
};

// GALAXY VIEW COMPONENT
const GalaxyView = ({ galaxy, constellations, onBack, onSelectConstellation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredDomain, setHoveredDomain] = useState(null);

  const totalSkills = constellations.reduce((sum, c) => sum + c.totalSkills, 0);
  const totalCompleted = constellations.reduce((sum, c) => sum + c.completedSkills, 0);
  const totalInProgress = constellations.reduce((sum, c) => sum + c.inProgressSkills, 0);
  const overallProgress = totalSkills > 0 ? Math.round((totalCompleted / totalSkills) * 100) : 0;

  const filteredConstellations = constellations.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-purple-300 hover:text-purple-200 mb-6 transition-colors mx-auto"
          >
            <ArrowLeft size={20} />
            <span>Back to Universe</span>
          </button>

          <div className="text-7xl mb-4">{galaxy.icon}</div>
          <h1 className="text-6xl font-bold text-white mb-4">
            {galaxy.name}
          </h1>
          <p className="text-2xl text-purple-200 mb-8">
            Explore {constellations.length} constellations across {totalSkills} skills
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-xl px-8 py-4 border border-white/20">
              <div className="text-4xl font-bold text-white">{totalCompleted}</div>
              <div className="text-sm text-gray-300">Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl px-8 py-4 border border-white/20">
              <div className="text-4xl font-bold text-yellow-400">{totalInProgress}</div>
              <div className="text-sm text-gray-300">In Progress</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl px-8 py-4 border border-white/20">
              <div className="text-4xl font-bold text-purple-400">{overallProgress}%</div>
              <div className="text-sm text-gray-300">Progress</div>
            </div>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search constellations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur border-2 border-white/20 rounded-xl text-white text-lg placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-semibold">Overall Progress</h3>
            <span className="text-white font-bold text-xl">{overallProgress}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
            <div
              className="h-4 rounded-full bg-gradient-to-r from-green-500 via-purple-500 to-pink-500 transition-all duration-1000"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        {/* Constellations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {filteredConstellations.map(constellation => {
            const progress = constellation.totalSkills > 0 
              ? Math.round((constellation.completedSkills / constellation.totalSkills) * 100)
              : 0;
            const isHovered = hoveredDomain === constellation.id;

            return (
              <div
                key={constellation.id}
                onMouseEnter={() => setHoveredDomain(constellation.id)}
                onMouseLeave={() => setHoveredDomain(null)}
                className="relative p-6 rounded-xl bg-white/5 backdrop-blur border-2 border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: isHovered ? `0 0 40px ${constellation.color}60` : 'none'
                }}
              >
                {/* Icon */}
                <div className="text-6xl mb-3 text-center">
                  {constellation.icon}
                </div>

                {/* Name */}
                <h3 className="text-white font-bold text-lg mb-2 leading-tight min-h-[56px] flex items-center justify-center text-center">
                  {constellation.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-snug min-h-[60px] text-center">
                  {constellation.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-white/10 rounded-full h-3 mb-3 overflow-hidden">
                  <div
                    className="h-3 rounded-full transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: constellation.color
                    }}
                  />
                </div>

                {/* Stats */}
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Skills</span>
                    <span className="text-white font-semibold">{constellation.totalSkills}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Completed</span>
                    <span className="text-green-400 font-semibold">{constellation.completedSkills}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white font-bold">{progress}%</span>
                  </div>
                </div>

                {/* Explore CTA */}
                <div 
                  onClick={() => onSelectConstellation(constellation)}
                  className="mt-4 flex items-center justify-center gap-2 text-purple-300 font-semibold hover:text-purple-200 transition-colors cursor-pointer"
                >
                  <span>Explore</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// CONSTELLATION VIEW COMPONENT (AI & Innovation)
const ConstellationView = ({ constellation, skills, portfolioEvidence, selectedSkill, setSelectedSkill, onBack }) => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const allSkills = [...skills.foundation, ...skills.intermediate, ...skills.advanced];
  
  const filteredSkills = {
    foundation: skills.foundation.filter(s => filterStatus === 'all' || s.status === filterStatus),
    intermediate: skills.intermediate.filter(s => filterStatus === 'all' || s.status === filterStatus),
    advanced: skills.advanced.filter(s => filterStatus === 'all' || s.status === filterStatus)
  };

  const totalSkills = allSkills.length;
  const completedSkills = allSkills.filter(s => s.status === 'completed').length;
  const inProgressSkills = allSkills.filter(s => s.status === 'in-progress').length;
  const progressPercent = totalSkills > 0 ? Math.round((completedSkills / totalSkills) * 100) : 0;

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'border-green-400 bg-green-500/20';
      case 'in-progress': return 'border-yellow-400 bg-yellow-500/20';
      default: return 'border-gray-600 bg-gray-700/20';
    }
  };

  const getStatusDot = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-400';
      case 'in-progress': return 'bg-yellow-400';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return '✅';
      case 'in-progress': return '📖';
      default: return '⚪';
    }
  };

  const getEvidenceIcon = (type) => {
    switch(type) {
      case 'blog': return <FileText size={16} className="text-blue-400" />;
      case 'tool': return <Plus size={16} className="text-purple-400" />;
      case 'video': return <Youtube size={16} className="text-red-400" />;
      case 'case': return <Briefcase size={16} className="text-green-400" />;
      case 'github': return <Github size={16} className="text-gray-400" />;
      default: return <FileText size={16} />;
    }
  };

  const SkillNode = ({ skill }) => {
    const isSelected = selectedSkill?.id === skill.id;
    const isHovered = hoveredSkill === skill.id;

    return (
      <button
        onClick={() => setSelectedSkill(skill)}
        onMouseEnter={() => setHoveredSkill(skill.id)}
        onMouseLeave={() => setHoveredSkill(null)}
        className={`
          relative group p-3 rounded-lg border-2 transition-all duration-300
          min-w-[140px] max-w-[160px]
          ${getStatusColor(skill.status)}
          ${isSelected ? 'scale-110 shadow-2xl' : 'hover:scale-105'}
          ${isHovered ? 'ring-2 ring-purple-400 shadow-lg' : ''}
        `}
        style={{
          boxShadow: (isHovered || isSelected) ? '0 0 20px rgba(168, 85, 247, 0.4)' : 'none'
        }}
      >
        <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${getStatusDot(skill.status)}`} />
        
        {skill.evidenceCount > 0 && (
          <div className="absolute -top-1 -left-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {skill.evidenceCount}
          </div>
        )}

        <div className="text-white text-sm font-medium leading-tight min-h-[40px] flex items-center justify-center text-center">
          {skill.name}
        </div>

        <div className="text-gray-500 text-xs mt-1 text-center">
          #{skill.id}
        </div>
      </button>
    );
  };

  const TierSection = ({ title, skills, icon }) => {
    if (skills.length === 0 && filterStatus !== 'all') return null;
    
    return (
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4 pb-2 border-b border-white/10">
          <div className="text-3xl">{icon}</div>
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-400">{skills.length} skills</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <SkillNode key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-purple-300 hover:text-purple-200 mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Galaxy</span>
          </button>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="text-6xl">{constellation.icon}</div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{constellation.name}</h1>
                <p className="text-purple-200">
                  {completedSkills} of {totalSkills} skills • {progressPercent}% complete
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-green-400">{completedSkills}</div>
                <div className="text-xs text-gray-300">Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-yellow-400">{inProgressSkills}</div>
                <div className="text-xs text-gray-300">In Progress</div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filterStatus === 'all' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setFilterStatus('completed')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filterStatus === 'completed' ? 'bg-green-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              ✅ Completed
            </button>
            <button
              onClick={() => setFilterStatus('in-progress')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filterStatus === 'in-progress' ? 'bg-yellow-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              📖 In Progress
            </button>
            <button
              onClick={() => setFilterStatus('not-yet')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filterStatus === 'not-yet' ? 'bg-gray-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              ⚪ Not Yet
            </button>
          </div>
        </div>

        {/* Constellation */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
          <TierSection title="Advanced Tier" skills={filteredSkills.advanced} icon="💫" />
          <TierSection title="Intermediate Tier" skills={filteredSkills.intermediate} icon="✨" />
          <TierSection title="Foundation Tier" skills={filteredSkills.foundation} icon="⭐" />
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white/5 backdrop-blur rounded-lg p-4 border border-white/10">
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-gray-300">✅ Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="text-gray-300">📖 In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-500" />
              <span className="text-gray-300">⚪ Not Yet</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-8">
          <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-purple-500/30 shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-br from-slate-900 to-purple-900 p-6 border-b border-white/10 flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{getStatusIcon(selectedSkill.status)}</span>
                  <h2 className="text-2xl font-bold text-white">{selectedSkill.name}</h2>
                </div>
                <div className="flex gap-4 text-sm text-gray-300">
                  <span>Skill #{selectedSkill.id}</span>
                  <span>•</span>
                  <span>{constellation.icon} {constellation.name}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {portfolioEvidence[selectedSkill.id] && portfolioEvidence[selectedSkill.id].length > 0 ? (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">📚 Portfolio Evidence</h3>
                  <div className="space-y-3">
                    {portfolioEvidence[selectedSkill.id].map((item, idx) => (
                      <div key={idx} className="bg-white/5 backdrop-blur rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3 flex-1">
                            {getEvidenceIcon(item.type)}
                            <div className="flex-1">
                              <h4 className="text-white font-medium mb-1">{item.title}</h4>
                              <p className="text-sm text-gray-400">{item.date}</p>
                            </div>
                          </div>
                          <a href={item.url} className="flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm transition-colors" target="_blank" rel="noopener noreferrer">
                            View
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white/5 backdrop-blur rounded-lg p-6 border border-white/10 text-center">
                  <p className="text-gray-400 mb-4">No portfolio evidence yet</p>
                  <p className="text-sm text-gray-500">Add evidence to portfolio.json to showcase your work</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillUniverse;
