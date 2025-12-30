# 🌌 Getting Started with Your Skill Universe

Welcome! This folder contains everything you need to launch your interactive skill portfolio.

---

## 📚 Which Guide Do I Use?

### **👋 Never done this before?**
→ Start with **[QUICKSTART.md](QUICKSTART.md)**

This walks you through:
- Installing Node.js
- Installing Git
- Creating accounts
- Running the app locally
- Making your first edit

**Time:** ~30 minutes

---

### **💻 Have Node.js and Git already?**
→ Jump to **[README.md](README.md)**

This covers:
- Project structure
- How to update content
- Data format reference
- Common tasks

**Time:** ~5 minutes to skim

---

### **🚀 Ready to deploy?**
→ Follow **[DEPLOYMENT.md](DEPLOYMENT.md)**

Step-by-step:
1. Push to GitHub
2. Deploy to Vercel
3. Set up subdomain
4. Link from Webflow

**Time:** ~20 minutes

---

## 📁 What's in This Folder?

```
skill-universe/
│
├── 📖 GETTING-STARTED.md     ← You are here!
├── 📖 QUICKSTART.md           ← Complete beginner guide
├── 📖 README.md               ← Project documentation
├── 📖 DEPLOYMENT.md           ← How to deploy
│
├── 🚀 setup.sh                ← Mac/Linux setup script
├── 🚀 setup.bat               ← Windows setup script
│
├── 📦 package.json            ← Project dependencies
├── 🏗️ vite.config.js
├── 🎨 tailwind.config.js
├── 📄 index.html
│
├── src/
│   ├── App.jsx               ← Your complete Skill Universe app
│   ├── main.jsx
│   └── index.css
│
└── public/
    └── data/
        ├── universe.json     ← Galaxies & constellations
        ├── skills.json       ← All your skills
        └── portfolio.json    ← Portfolio evidence links
```

---

## 🎯 Your Path to Launch

### **Week 1: Get It Running Locally**

1. **Day 1:** Follow QUICKSTART.md
   - Install prerequisites
   - Get app running on `localhost`
   - Make a test edit

2. **Day 2-3:** Customize your data
   - Update `portfolio.json` with real links
   - Fix skill statuses in `skills.json`
   - Update progress numbers in `universe.json`

3. **Day 4-5:** Test everything
   - Click through all views
   - Verify links work
   - Check on mobile (use your phone to visit localhost)

### **Week 2: Deploy to Production**

4. **Day 6:** Push to GitHub
   - Follow DEPLOYMENT.md Step 1
   - Get your code on GitHub

5. **Day 7:** Deploy to Vercel
   - Follow DEPLOYMENT.md Step 2
   - Get live URL

6. **Day 8-9:** Set up subdomain
   - Follow DEPLOYMENT.md Step 3
   - Configure DNS
   - Wait for propagation

7. **Day 10:** Link from Webflow
   - Add CTA button
   - Test the full experience
   - Share with friends!

### **Week 3+: Maintain & Improve**

8. **Ongoing:** Add portfolio evidence
   - Publish blog post → Add to portfolio.json
   - Build tool → Add to portfolio.json
   - Complete skill → Update status
   - Commit & push → Auto-deploys!

---

## 🆘 Quick Troubleshooting

### **"I'm completely lost"**
→ Start with QUICKSTART.md from the beginning

### **"Node/Git won't install"**
→ See QUICKSTART.md Part 1 for detailed instructions

### **"App won't start locally"**
→ Run `npm install` then `npm run dev`

### **"Changes not showing"**
→ Save file, then hard refresh (Cmd+Shift+R)

### **"Deploy failing"**
→ Check DEPLOYMENT.md troubleshooting section

### **"JSON errors"**
→ Validate at jsonlint.com

---

## 📧 Need More Help?

1. **Check the docs:**
   - QUICKSTART.md for setup issues
   - README.md for content updates
   - DEPLOYMENT.md for hosting questions

2. **Google it:**
   - Search exact error messages
   - Add "React" or "Vite" to searches

3. **AI assistants:**
   - Ask ChatGPT or Claude
   - Paste error messages

4. **Community:**
   - Stack Overflow
   - Reddit r/reactjs
   - Vercel Discord

---

## ✅ Success Checklist

Use this to track your progress:

### **Setup**
- [ ] Node.js installed and verified
- [ ] Git installed and verified
- [ ] GitHub account created
- [ ] Vercel account created
- [ ] Code editor installed (VS Code recommended)

### **Local Development**
- [ ] Project downloaded and extracted
- [ ] Dependencies installed (`npm install`)
- [ ] App runs locally (`npm run dev`)
- [ ] Can see app at `localhost:5173`
- [ ] Made a test edit to JSON
- [ ] Verified edit shows in browser

### **Customization**
- [ ] Added real portfolio links to `portfolio.json`
- [ ] Updated skill statuses in `skills.json`
- [ ] Updated progress numbers in `universe.json`
- [ ] All links tested and working

### **Deployment**
- [ ] Code pushed to GitHub
- [ ] Project deployed to Vercel
- [ ] Working URL received (e.g., `skill-universe-abc.vercel.app`)
- [ ] Subdomain configured (`skills.andrewkelly.studio`)
- [ ] DNS propagated and working
- [ ] Linked from Webflow site
- [ ] Tested full user flow

### **Ongoing**
- [ ] Know how to add portfolio evidence
- [ ] Know how to update skill status
- [ ] Understand commit → push → auto-deploy flow
- [ ] Have scheduled weekly update time

---

## 🎉 Ready to Start?

1. **Never done this?** → Open **QUICKSTART.md**
2. **Have experience?** → Open **README.md**  
3. **Ready to deploy?** → Open **DEPLOYMENT.md**

Let's build your Skill Universe! 🚀
