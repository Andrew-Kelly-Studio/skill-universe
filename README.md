# Andrew Kelly - Skill Universe Portfolio

An interactive constellation-based visualization of skills and expertise across Marketing Operationsand Billiards.

## 🌌 Live Demo
Visit: [skills.andrewkelly.studio](https://skills.andrewkelly.studio) *(after deployment)*

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free)

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/skill-universe.git
cd skill-universe
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
```

## 📁 Project Structure

```
skill-universe/
├── src/
│   ├── App.jsx                 # Main app component with navigation
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/
│   └── data/
│       ├── universe.json       # Galaxy and constellation data
│       ├── skills.json         # All skills organized by constellation
│       └── portfolio.json      # Portfolio evidence links
├── package.json
├── vite.config.js
└── README.md
```

## 📝 How to Update Content

### Adding Portfolio Evidence

1. **Open `public/data/portfolio.json`**

2. **Add your new evidence:**
```json
{
  "195": [
    {
      "type": "blog",
      "title": "Your New Blog Post Title",
      "url": "https://andrewkelly.studio/blog/your-post",
      "date": "2025-01-15"
    }
  ]
}
```

**Evidence types:**
- `blog` - Blog posts
- `tool` - Tools you've built
- `video` - Video tutorials
- `case` - Case studies
- `github` - GitHub repositories

3. **Commit and push:**
```bash
git add public/data/portfolio.json
git commit -m "Add new blog post evidence"
git push
```

Vercel will auto-deploy in 2-3 minutes!

### Updating Skill Status

1. **Open `public/data/skills.json`**

2. **Find your skill and update status:**
```json
{
  "id": 220,
  "name": "Retrieval Augmented Generation (RAG)",
  "status": "in-progress",  // Change from "not-yet"
  "evidenceCount": 1         // Update count
}
```

**Status options:**
- `completed` - Skill mastered with evidence
- `in-progress` - Currently learning
- `not-yet` - Planned for future

3. **Commit and push**

### Adding New Skills

1. **Open `public/data/skills.json`**

2. **Add to the appropriate tier:**
```json
{
  "ai-innovation": {
    "advanced": [
      {
        "id": 240,
        "name": "Your New Skill",
        "status": "not-yet",
        "evidenceCount": 0
      }
    ]
  }
}
```

3. **Update total count in `universe.json`:**
```json
{
  "id": 5,
  "name": "AI & Innovation",
  "totalSkills": 53  // Increment by 1
}
```

### Updating Progress Counts

When you complete skills, update these numbers in `public/data/universe.json`:

```json
{
  "id": 5,
  "name": "AI & Innovation",
  "totalSkills": 52,
  "completedSkills": 23,  // Increment when you complete a skill
  "inProgressSkills": 6   // Adjust as needed
}
```

Also update galaxy totals:
```json
{
  "id": "marketing-ops",
  "totalSkills": 818,
  "completedSkills": 199,  // Increment
  "inProgressSkills": 49
}
```

## 🎨 Customization

### Changing Colors

Edit colors in `public/data/universe.json`:

```json
{
  "name": "AI & Innovation",
  "color": "#ec4899"  // Change to any hex color
}
```

### Adding New Constellations

1. **Add to `universe.json`:**
```json
{
  "constellations": {
    "marketing-ops": [
      {
        "id": 17,
        "name": "New Domain",
        "icon": "🎯",
        "color": "#ff6b6b",
        "totalSkills": 30,
        "completedSkills": 0,
        "inProgressSkills": 0,
        "description": "Your description here"
      }
    ]
  }
}
```

2. **Create skills file in `skills.json`:**
```json
{
  "new-domain": {
    "foundation": [],
    "intermediate": [],
    "advanced": []
  }
}
```

3. **Update total constellation count in galaxy**

### Adding New Galaxies

1. **Add to `universe.json`:**
```json
{
  "galaxies": [
    {
      "id": "new-galaxy",
      "name": "New Galaxy",
      "icon": "🌟",
      "color": "#10b981",
      "totalSkills": 100,
      "completedSkills": 0,
      "inProgressSkills": 0,
      "constellationCount": 10,
      "description": "Description here"
    }
  ]
}
```

2. **Add constellations for new galaxy**
3. **Create skills data**

## 🚀 Deployment to Vercel

### First Time Setup

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/skill-universe.git
git push -u origin main
```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repo
   - Click "Deploy"
   - Done! Takes 2 minutes.

3. **Set up custom domain:**
   - Go to your project settings
   - Click "Domains"
   - Add: `skills.andrewkelly.studio`
   - Follow DNS instructions (point CNAME to Vercel)

### Updating After Deployment

Just commit and push:
```bash
git add .
git commit -m "Update portfolio evidence"
git push
```

Vercel auto-deploys in 2-3 minutes!

## 📊 Data Format Reference

### Skill Status Values
- `completed` - Green dot, with portfolio evidence
- `in-progress` - Yellow dot, currently learning
- `not-yet` - Gray dot, planned for future

### Evidence Type Values
- `blog` - Blog posts (blue icon)
- `tool` - Tools/code you built (purple icon)
- `video` - Video content (red icon)
- `case` - Case studies (green icon)
- `github` - GitHub repos (gray icon)

## 🔧 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vercel** - Hosting

## 📝 Common Tasks

### Weekly Update Workflow

1. Publish new blog post on Webflow site
2. Open `public/data/portfolio.json`
3. Add link to appropriate skill ID
4. Update `evidenceCount` in `skills.json`
5. If skill status changed, update status
6. Commit and push
7. Changes live in 2-3 minutes!

### Monthly Review Workflow

1. Review skills marked "in-progress"
2. Move completed ones to "completed"
3. Update progress counts in `universe.json`
4. Add new skills you want to learn
5. Commit and push

## 🆘 Troubleshooting

**App not loading?**
- Check browser console for errors
- Verify JSON files are valid (use JSONLint.com)
- Clear cache and reload

**Changes not showing?**
- Check Vercel deployment status
- Wait 2-3 minutes for deployment
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)

**JSON errors?**
- Validate your JSON at jsonlint.com
- Check for missing commas or brackets
- Ensure skill IDs are strings (in quotes)

## 📧 Questions?

Open an issue on GitHub or contact andrew@andrewkelly.studio

## 📄 License

Personal portfolio - All rights reserved
"# skill-universe" 
