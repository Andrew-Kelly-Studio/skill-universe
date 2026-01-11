import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, ChevronRight, X, ExternalLink, Github, Youtube, FileText, Briefcase, Plus } from 'lucide-react';

// Skill descriptions for context and clarity
const skillDescriptions = {
  // Email Operations (1-50)
  1: "Understanding the core principles of email marketing including audience targeting, campaign strategy, and performance metrics.",
  2: "Navigating email service provider interfaces to create, send, and manage email campaigns effectively.",
  3: "Applying fundamental design principles to create visually appealing and effective email layouts.",
  4: "Writing compelling email copy that drives engagement, conversions, and maintains brand voice.",
  5: "Ensuring compliance with CAN-SPAM Act requirements for commercial email communications.",
  6: "Managing subscriber lists, segmentation, and maintaining data quality for effective email campaigns.",
  7: "Importing and exporting contact data while maintaining data integrity and structure.",
  8: "Managing unsubscribe processes to maintain sender reputation and comply with regulations.",
  9: "Setting up SPF records to authenticate email sending domains and improve deliverability.",
  10: "Implementing DKIM signatures to verify email authenticity and prevent spoofing.",
  11: "Configuring DMARC policies to protect domain reputation and monitor email authentication.",
  12: "Implementing Brand Indicators for Message Identification to display brand logos in inboxes.",
  13: "Maintaining positive sender reputation through proper email practices and list management.",
  14: "Monitoring inbox placement rates and identifying deliverability issues across ISPs.",
  15: "Testing email delivery to major inbox providers to ensure proper placement.",
  16: "Identifying and resolving spam filter triggers that affect email deliverability.",
  17: "Implementing gradual sending volume increases when using new IP addresses.",
  18: "Deciding between dedicated and shared IP addresses based on sending volume and needs.",
  19: "Implementing subdomain strategies to protect primary domain reputation.",
  20: "Building responsive HTML email templates that render correctly across email clients.",
  21: "Applying inline CSS styles for consistent rendering across email platforms.",
  22: "Creating mobile-responsive email designs that adapt to different screen sizes.",
  23: "Designing emails that display correctly in dark mode across various email clients.",
  24: "Ensuring emails are accessible to users with disabilities following WCAG guidelines.",
  25: "Implementing dynamic content blocks that change based on subscriber data.",
  26: "Using merge tags and personalization tokens to customize emails for individual recipients.",
  27: "Testing different subject lines to optimize open rates and engagement.",
  28: "Testing email content variations to improve click-through rates and conversions.",
  29: "Optimizing send times based on audience behavior and engagement patterns.",
  30: "Creating targeted email campaigns using subscriber segments based on behavior and attributes.",
  31: "Setting up automated email triggers based on subscriber actions and lifecycle events.",
  32: "Designing multi-touch drip campaigns that nurture leads over time.",
  33: "Creating campaigns to re-engage inactive subscribers and improve list health.",
  34: "Developing strategies to win back churned subscribers before removing them from lists.",
  35: "Building preference centers that allow subscribers to customize their email experience.",
  36: "Managing subscriber preferences and communication frequency settings.",
  37: "Optimizing unsubscribe flows to reduce friction while maintaining compliance.",
  38: "Managing transactional emails like receipts, confirmations, and notifications.",
  39: "Troubleshooting rendering issues across different email clients and devices.",
  40: "Diagnosing and resolving complex deliverability problems affecting inbox placement.",
  41: "Setting up and monitoring ISP feedback loops to track complaints and issues.",
  42: "Classifying bounce types and implementing appropriate handling strategies.",
  43: "Automating list hygiene processes to maintain deliverability and engagement.",
  44: "Implementing suppression rules based on engagement patterns to protect sender reputation.",
  45: "Developing policies for removing long-term inactive subscribers from mailing lists.",
  46: "Creating sophisticated dynamic content logic for highly personalized email experiences.",
  47: "Implementing AMP for Email to create interactive email experiences.",
  48: "Adding interactive elements like carousels, accordions, and forms within emails.",
  49: "Setting up behavioral triggers based on subscriber actions across channels.",
  50: "Analyzing email performance metrics and optimizing campaigns based on data insights.",
  
  // AI & Innovation (188-239)
  188: "Understanding how artificial intelligence and large language models can enhance marketing operations and strategy.",
  189: "Grasping the capabilities and limitations of large language models like GPT and Claude.",
  190: "Crafting effective prompts to get desired outputs from AI language models.",
  191: "Leveraging ChatGPT and Claude for marketing tasks like content creation and analysis.",
  192: "Using AI tools to generate marketing content efficiently while maintaining quality.",
  193: "Utilizing AI for creative brainstorming and generating innovative marketing ideas.",
  194: "Understanding ethical considerations and potential biases in AI-generated content.",
  195: "Mastering sophisticated prompting techniques like chain-of-thought reasoning, few-shot examples, and structured outputs to get consistent, high-quality results from AI models.",
  196: "Building and maintaining libraries of reusable prompt templates for common tasks.",
  197: "Using chain-of-thought prompting to guide AI through complex reasoning processes.",
  198: "Providing examples in prompts to guide AI toward desired output formats and styles.",
  199: "Iteratively refining prompts to improve AI output quality and relevance.",
  200: "Using AI to review, improve, and refine marketing content for clarity and impact.",
  201: "Leveraging AI to write compelling email subject lines and body copy.",
  202: "Creating engaging social media content with AI assistance while maintaining brand voice.",
  203: "Analyzing marketing data and extracting insights using AI-powered tools.",
  204: "Using AI to identify and create meaningful audience segments for targeted campaigns.",
  205: "Developing AI-driven personalization strategies to enhance customer experiences.",
  206: "Creating images using AI tools like Midjourney, DALL-E, and Stable Diffusion.",
  207: "Writing effective prompts to generate specific visual styles and compositions.",
  208: "Evaluating AI tools based on capabilities, cost, and fit for marketing needs.",
  209: "Designing multi-step processes where AI handles specific tasks in a larger workflow, figuring out where AI fits and where humans should stay involved.",
  210: "Using AI to conduct market research and competitive intelligence gathering.",
  211: "Analyzing competitors' strategies and positioning using AI-powered tools.",
  212: "Building custom GPTs or Claude Projects for specialized marketing tasks.",
  213: "Optimizing content for search engines using AI-powered SEO tools and insights.",
  214: "Understanding and implementing basic API connections to Claude and similar services.",
  215: "Working with OpenAI's API to build custom AI-powered marketing tools.",
  216: "Managing API keys and authentication for secure AI service integrations.",
  217: "Creating automated marketing workflows powered by AI capabilities.",
  218: "Implementing function calling to enable AI to interact with external tools and data.",
  219: "Requesting structured JSON outputs from AI for consistent data formatting.",
  220: "Implementing RAG (Retrieval Augmented Generation) to ground AI responses in specific data.",
  221: "Using vector databases to enable semantic search across marketing content.",
  222: "Fine-tuning AI models on custom data for specialized marketing applications.",
  223: "Evaluating AI model performance and output quality for marketing use cases.",
  224: "Developing custom AI-powered tools tailored to specific marketing operations needs.",
  225: "Using AI for predictive analytics to forecast campaign performance and trends.",
  226: "Creating dynamic, AI-generated content that adapts to user behavior in real-time.",
  227: "Analyzing conversation data to extract insights about customer needs and sentiment.",
  228: "Building AI-powered chatbots for customer service and lead qualification.",
  229: "Developing governance frameworks for responsible AI use in marketing.",
  230: "Assessing and mitigating risks associated with AI deployment in marketing.",
  231: "Implementing responsible AI practices including bias detection and mitigation.",
  232: "Measuring the return on investment from AI implementations in marketing operations.",
  233: "Creating strategic roadmaps for AI adoption across marketing functions.",
  234: "Leading organizational change to successfully integrate AI into marketing processes.",
  235: "Training team members on effective AI tool usage and best practices.",
  236: "Evaluating AI vendors and tools for procurement decisions.",
  237: "Managing pilot programs to test AI capabilities before full deployment.",
  238: "Collecting, preparing, and managing training data for AI model customization.",
  239: "Operating and optimizing conversational AI systems and chatbot platforms.",
    
  // Campaign Operations (240-298)
  254: "Building standalone landing pages optimized for specific campaigns with focused messaging, clear calls-to-action, and conversion-oriented design elements.",
  257: "Designing web forms that optimize completion rates by balancing data collection needs with user experience through field selection, layout, validation, and progressive disclosure.",
  261: "Designing post-conversion thank you pages that confirm the action, provide next steps, and leverage the high-engagement moment for additional conversions like social sharing, content downloads, or secondary offers.",
  265: "Building dashboards that track campaign metrics across channels including traffic, conversions, pipeline contribution, and ROI to measure effectiveness and inform optimization.",

  // Lead Management (335-388)
  342: "Creating dynamic lists that automatically update as contacts enter and exit based on defined criteria, ensuring segments stay current as contact properties and behaviors change.",
  343: "Building complex audience segments using multiple criteria, AND/OR logic, nested conditions, and property-based filters to target specific subsets of contacts for personalized campaigns.",

  // Platform Mastery (389-479)
  389: "Understanding HubSpot's CRM structure including contacts, companies, deals, and tickets, along with core functionality for managing customer relationships and sales activities.",
  390: "Creating, updating, and organizing contact records in HubSpot including managing contact properties, lifecycle stages, and contact-level activities and communications.",
  394: "Navigating HubSpot's interface across Marketing Hub, Sales Hub, Service Hub, and CMS Hub to access tools, settings, and features efficiently.",
  405: "Creating and configuring custom contact, company, deal, and ticket properties in HubSpot to capture business-specific data beyond default fields.",
  411: "Building static lists for one-time segments and active lists that automatically update based on contact criteria for dynamic audience targeting.",
  419: "Building and customizing reports in HubSpot to track marketing, sales, and service metrics using standard and custom report builders with appropriate data sources and visualizations.",
  421: "Creating and organizing dashboards in HubSpot that combine multiple reports into unified views for monitoring KPIs, campaign performance, and business metrics.",

  // Technical Skills (480-529)
  480: "Understanding HTML document structure, semantic tags, elements, and attributes to read, edit, and troubleshoot web pages and email templates.",
  482: "Applying CSS properties to control typography, colors, spacing, borders, and layout of HTML elements across web pages and emails.",
  487: "Designing layouts that adapt to different viewport sizes using flexible grids, media queries, and scalable elements to ensure usability across devices.",    
  493: "Understanding how JSON organizes data with key-value pairs, arrays, and nested objects so you can read API responses, configure integrations, and work with structured data without getting lost.",
  497: "Understanding core Git concepts like commits, branches, and repositories to track changes in code or files without losing progress.",
  498: "Using GitHub or GitLab to store code, collaborate through pull requests and issues, and manage projects without overwriting each other's work.",
  501: "Understanding how web servers process requests, serve content, and host websites, including basic concepts of server types, deployment, and hosting environments.",
  502: "Understanding how Domain Name System translates domain names to IP addresses, including DNS records, propagation, and configuration for domains and email authentication.",
  527: "Writing clear documentation that explains how systems work, how to troubleshoot problems, or how to set something up so the next person can actually understand it.",
    
  // Process & Strategy (530-595)
  530: "Understanding how JSON organizes data with key-value pairs, arrays, and nested objects so you can read API responses, configure integrations, and work with structured data without getting lost.",

  // Compliance & Governance (596-639)
  596: "Understanding fundamental privacy principles for marketing including data collection consent, transparency requirements, individual rights, and ethical data usage practices.",
  598: "Understanding General Data Protection Regulation requirements including lawful bases for processing, data subject rights, consent mechanisms, and obligations for organizations handling EU resident data.",
  599: "Understanding California Consumer Privacy Act requirements including consumer rights to know, delete, and opt-out of data sales, plus disclosure and compliance obligations for businesses.",
  603: "Implementing GDPR-compliant marketing processes including consent management, data processing documentation, privacy notices, and mechanisms for honoring data subject rights requests.",
  604: "Implementing CCPA-compliant systems and processes including consumer rights request handling, opt-out mechanisms, privacy policy updates, and vendor data sharing disclosures.",
  608: "Implementing cookie consent banners and preference centers that comply with privacy regulations by obtaining consent before non-essential tracking and allowing users to manage their preferences.",
  614: "Embedding privacy considerations into system design and processes from the start by minimizing data collection, implementing default privacy settings, and building in security measures proactively.",
   
  
  // Content Operations (687-739)
  696: "Using DAM platforms to centralize storage, organize with metadata and taxonomies, control access permissions, and enable efficient retrieval of marketing assets.",
  700: "Automating content creation, review, approval, and publishing processes through workflow tools to reduce manual handoffs and speed up production cycles.",
  713: "Measuring content effectiveness through metrics like pageviews, engagement rate, time on page, conversions, and ROI to inform content strategy and optimization."
};

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
        {/* Navigation Buttons - Top */}
        <div className="flex items-center justify-between mb-8">
          <a
            href="https://andrewkelly.studio"
            className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </a>
          
          <a
            href="https://andrewkelly.studio/feedback"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-purple-200 hover:text-white transition-all text-sm backdrop-blur border border-white/10"
          >
            <span>📝</span>
            <span className="hidden sm:inline">Share Feedback</span>
          </a>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-8xl mb-6">✨</div>
          <h1 className="text-7xl font-bold text-white mb-6">
            My Skill Universe
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive map of my professional skills and expertise organized by domain
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
                <h2 className="text-3xl font-bold text-white mb-6">
                  {galaxy.name}
                </h2>

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
                    <span className="text-gray-400">Completed</span>
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

        {/* About Section - Scroll Target */}
        <div id="about-section" className="mt-24 mb-8 scroll-mt-8">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              About This Skill Universe
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">What you're looking at:</strong> An interactive skill-tracking 
                tool I built to map and document my professional capabilities across marketing operations and beyond.
              </p>
              
              <p>
                I created this platform to serve three key purposes:
              </p>
              
              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">Personal Development Tracker:</strong> Monitor skills I'm actively working on and map out what's possible within each domain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">Portfolio Showcase:</strong> Share tangible evidence of my work, projects, tools, case studies, and content as I build and document each skill</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">Technical Demonstration:</strong> Explore what's possible using Claude AI to build a functional web application from scratch as a portfolio piece</span>
                </li>
              </ul>
              
              <p>
                <strong className="text-white">How it works:</strong> Each skill is categorized by proficiency level 
                (Foundation, Intermediate, Advanced) and marked with a status indicator. Skills marked "completed" 
                include portfolio evidence. Skills marked "in progress" or "not yet" represent areas I'm exploring 
                or considering for future development.
              </p>
              
              <p className="text-sm text-gray-400 italic border-t border-white/10 pt-4 mt-6">
                This is a working tool and portfolio project. Expect it to evolve as I continue building, 
                learning, and documenting my work. For my complete professional background and resume, 
                <a href="https://andrewkelly.studio/about-andrew-kelly" className="text-purple-300 hover:text-purple-200 underline ml-1">visit my main site</a>.
              </p>
            </div>
          </div>
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
        {/* Feedback Button - Top Right */}
        <div className="absolute top-0 right-0 z-20">
          <a
            href="https://andrewkelly.studio/feedback"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-purple-200 hover:text-white transition-all text-sm backdrop-blur border border-white/10"
          >
            <span>📝</span>
            <span className="hidden sm:inline">Share Feedback</span>
          </a>
        </div>

        {/* Header */}
        <div className="mb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-purple-300 hover:text-purple-200 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Universe</span>
          </button>
          
          <div className="text-center">
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
              <button
                key={constellation.id}
                onClick={() => onSelectConstellation(constellation)}
                onMouseEnter={() => setHoveredDomain(constellation.id)}
                onMouseLeave={() => setHoveredDomain(null)}
                className="relative p-6 rounded-xl bg-white/5 backdrop-blur border-2 border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer text-left"
                style={{
                  boxShadow: isHovered ? `0 0 40px ${constellation.color}60` : 'none'
                }}
              >
                {/* Icon */}
                <div className="text-6xl mb-3 text-center">
                  {constellation.icon}
                </div>

                {/* Name */}
                <h3 className="text-white font-bold text-lg mb-4 leading-tight min-h-[56px] flex items-center justify-center text-center">
                  {constellation.name}
                </h3>

                {/* Progress Bar - moved up since we removed description */}
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
                <div className="mt-4 flex items-center justify-center gap-2 text-purple-300 font-semibold group-hover:text-purple-200 transition-colors">
                  <span>Explore</span>
                  <ChevronRight size={20} />
                </div>
              </button>
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
      case 'blog': return <FileText size={24} className="text-blue-400" />;
      case 'tool': return <Plus size={24} className="text-purple-400" />;
      case 'video': return <Youtube size={24} className="text-red-400" />;
      case 'case': return <Briefcase size={24} className="text-green-400" />;
      case 'github': return <Github size={24} className="text-gray-400" />;
      case 'project': return <Briefcase size={24} className="text-purple-400" />;
      default: return <FileText size={24} className="text-purple-400" />;
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
          relative group p-4 rounded-lg border-2 transition-all duration-300
          w-full h-full
          ${getStatusColor(skill.status)}
          ${isSelected ? 'scale-105 shadow-2xl z-10' : 'hover:scale-105'}
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

        <div className="text-white text-sm font-medium leading-tight min-h-[48px] flex items-center justify-center text-center">
          {skill.name}
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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
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
        {/* Feedback Button - Top Right */}
        <div className="absolute top-0 right-0 z-20">
          <a
            href="https://andrewkelly.studio/feedback"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-purple-200 hover:text-white transition-all text-sm backdrop-blur border border-white/10"
          >
            <span>📝</span>
            <span className="hidden sm:inline">Share Feedback</span>
          </a>
        </div>

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
          <TierSection title="Advanced" skills={filteredSkills.advanced} icon="💫" />
          <TierSection title="Intermediate" skills={filteredSkills.intermediate} icon="✨" />
          <TierSection title="Foundation" skills={filteredSkills.foundation} icon="⭐" />
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
          <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-purple-500/30 shadow-2xl relative">
            {/* Close button - positioned at top right */}
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all"
            >
              <X size={24} />
            </button>

            <div className="sticky top-0 bg-gradient-to-br from-slate-900 to-purple-900 p-6 pt-12 border-b border-white/10">
              {/* Domain - moved above title */}
              <div className="text-sm text-gray-400 mb-3">
                <span>{constellation.icon} {constellation.name}</span>
              </div>
              
              {/* Title with status icon */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{getStatusIcon(selectedSkill.status)}</span>
                <h2 className="text-2xl font-bold text-white pr-12">{selectedSkill.name}</h2>
              </div>
              
              {/* Skill Description */}
              {skillDescriptions[selectedSkill.id] && (
                <p className="text-gray-300 leading-relaxed bg-white/5 p-4 rounded-lg border border-white/10">
                  {skillDescriptions[selectedSkill.id]}
                </p>
              )}
            </div>

            <div className="p-6 space-y-6">
              {portfolioEvidence[selectedSkill.id] && portfolioEvidence[selectedSkill.id].items && portfolioEvidence[selectedSkill.id].items.length > 0 ? (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">📚 Portfolio Evidence</h3>
                  <div className="space-y-4">
                    {portfolioEvidence[selectedSkill.id].items.map((item, idx) => (
                      <div key={idx} className="bg-white/5 backdrop-blur rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors">
                        {/* Header with Icon and Title */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                            {getEvidenceIcon(item.type)}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-400">{item.date}</p>
                          </div>
                        </div>

                        {/* Description */}
                        {item.description && (
                          <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                        )}

                        {/* Learn More Button */}
                        {item.url && (
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors"
                          >
                            <span>Learn More</span>
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white/5 backdrop-blur rounded-lg p-6 border border-white/10 text-center">
                  <p className="text-gray-400 mb-2">📋 Evidence Coming Soon</p>
                  <p className="text-sm text-gray-500">Portfolio evidence will be added as I continue to build and demonstrate this skill.</p>
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
