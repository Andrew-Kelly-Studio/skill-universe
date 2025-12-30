# 🚀 Deployment Guide

## Step-by-Step: Get Your Skill Universe Live

---

## **STEP 1: Set Up GitHub Repository**

### A. Create GitHub Account (if needed)
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the prompts

### B. Create New Repository
1. Click the "+" icon → "New repository"
2. Repository name: `skill-universe`
3. Description: "Interactive skill portfolio"
4. Choose "Public"
5. DO NOT initialize with README (we already have files)
6. Click "Create repository"

### C. Push Your Code
GitHub will show you commands. Run these in your terminal:

```bash
cd /path/to/your/skill-universe-folder

git init
git add .
git commit -m "Initial commit: Skill Universe v1"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/skill-universe.git
git push -u origin main
```

✅ **Your code is now on GitHub!**

---

## **STEP 2: Deploy to Vercel**

### A. Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your repos

### B. Import Project
1. Click "Add New..." → "Project"
2. Find `skill-universe` in the list
3. Click "Import"

### C. Configure & Deploy
1. **Framework Preset:** Vite (auto-detected ✅)
2. **Root Directory:** ./ (default, leave it)
3. **Build Command:** `npm run build` (auto-filled ✅)
4. **Output Directory:** `dist` (auto-filled ✅)
5. Click "Deploy"

⏱️ **Wait 2-3 minutes...**

✅ **Your site is live!**

You'll get a URL like: `skill-universe-abc123.vercel.app`

---

## **STEP 3: Set Up Custom Domain**

### A. In Vercel
1. Go to your project
2. Click "Settings" → "Domains"
3. Type: `skills.andrewkelly.studio`
4. Click "Add"
5. Vercel will show you DNS instructions

### B. In Your Domain Provider

**If you use Cloudflare:**
1. Go to your Cloudflare dashboard
2. Click on `andrewkelly.studio`
3. Go to DNS → Records
4. Click "Add record"
5. Type: `CNAME`
6. Name: `skills`
7. Target: `cname.vercel-dns.com`
8. Proxy status: DNS only (gray cloud)
9. Save

**If you use another provider (Namecheap, GoDaddy, etc):**
1. Log into your domain registrar
2. Find DNS settings
3. Add CNAME record:
   - Host: `skills`
   - Points to: `cname.vercel-dns.com`
   - TTL: Automatic or 3600
4. Save

⏱️ **Wait 5-60 minutes for DNS propagation**

✅ **Visit: skills.andrewkelly.studio**

Your Skill Universe is live!

---

## **STEP 4: Link from Webflow**

### A. Add CTA Button in Webflow
1. Log into Webflow
2. Edit your homepage
3. Add a button or link
4. Text: "Explore My Skills" or "View Skill Universe"
5. Link to: `https://skills.andrewkelly.studio`
6. Style it prominently
7. Publish

### B. Add to Navigation (Optional)
1. Edit your nav menu
2. Add link: "Skills"
3. URL: `https://skills.andrewkelly.studio`
4. Publish

---

## **STEP 5: Make Your First Update**

Let's test the update workflow!

### A. Edit Portfolio Evidence
1. Open `public/data/portfolio.json` in your code editor
2. Add a new piece of evidence (use a real link):

```json
{
  "195": [
    {
      "type": "blog",
      "title": "Test Update: My Latest Post",
      "url": "https://andrewkelly.studio/blog/test",
      "date": "2025-01-15"
    }
  ]
}
```

### B. Commit & Push
```bash
git add public/data/portfolio.json
git commit -m "Add test portfolio evidence"
git push
```

### C. Watch It Deploy
1. Go to your Vercel dashboard
2. You'll see deployment in progress
3. Wait 2-3 minutes
4. Visit your site
5. Navigate to AI & Innovation → Click skill #195
6. See your new evidence!

✅ **You just made your first update!**

---

## **Quick Reference: Update Commands**

### When you add portfolio evidence:
```bash
git add public/data/portfolio.json
git commit -m "Add portfolio evidence for skill X"
git push
```

### When you update skill status:
```bash
git add public/data/skills.json
git commit -m "Mark skill X as completed"
git push
```

### When you update multiple files:
```bash
git add .
git commit -m "Update progress and add evidence"
git push
```

---

## **Troubleshooting**

### "Command not found: git"
Install Git:
- Mac: `brew install git` or download from git-scm.com
- Windows: Download from git-scm.com

### "Permission denied" when pushing
Set up SSH key or use HTTPS with personal access token.
See: [GitHub Docs](https://docs.github.com/en/authentication)

### Vercel build failing
1. Check build logs in Vercel dashboard
2. Verify package.json is correct
3. Try building locally: `npm run build`
4. Check for JSON errors in data files

### DNS not working
1. Wait longer (can take up to 24 hours, usually 1 hour)
2. Check DNS settings are correct
3. Try clearing your DNS cache
4. Test with `dig skills.andrewkelly.studio`

### Changes not showing
1. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. Check Vercel shows latest deployment
3. Clear browser cache
4. Try incognito window

---

## **What's Next?**

### Week 1: Get Familiar
- Make a few test updates
- Add real portfolio links
- Share with a friend for feedback

### Week 2: Add Content
- Update all completed skills with evidence
- Mark in-progress skills correctly
- Add any new skills you've learned

### Month 1: Expand
- Add Coffee & Espresso skills
- Add Billiards skills
- Consider moving to Airtable for easier editing

---

## **Support**

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **GitHub Docs:** [docs.github.com](https://docs.github.com)
- **Questions?** Open an issue in your GitHub repo

---

🎉 **Congratulations! Your Skill Universe is live!**
