# 🚀 QUICK START - Complete Beginner Guide

**Never used Node.js, Git, or GitHub before? No problem!**

This guide assumes you're starting from scratch.

---

## ✅ What You Need (Prerequisites)

### 1. **A Computer**
- Mac or Windows (either works!)

### 2. **About 30 minutes**
- Most is waiting for things to download/install

### 3. **An Internet Connection**

### 4. **Your Webflow site login** (for linking later)

---

## 📋 PART 1: Install Software (One Time Only)

### **A. Install Node.js** ⏱️ 5 minutes

**What is it?** Runs JavaScript on your computer (needed for React apps)

**Mac:**
1. Go to [nodejs.org](https://nodejs.org)
2. Click the big green **"LTS"** button
3. Open the downloaded file
4. Click through the installer (keep all defaults)
5. Done!

**Windows:**
1. Go to [nodejs.org](https://nodejs.org)
2. Click the big green **"LTS"** button
3. Run the `.msi` file
4. Click through installer (keep all defaults)
5. **Important:** Close any open Command Prompt windows
6. Done!

**How to verify it worked:**
- Open Terminal (Mac) or Command Prompt (Windows)
- Type: `node --version`
- You should see: `v20.something`
- If you see a version number, you're good! ✅

---

### **B. Install Git** ⏱️ 5 minutes

**What is it?** Tracks your code changes and connects to GitHub

**Mac:**
1. Open Terminal
2. Type: `git --version` and press Enter
3. Mac will ask to install Command Line Tools → Click **"Install"**
4. Wait 5-10 minutes
5. When done, type `git --version` again
6. You should see: `git version 2.something` ✅

**Windows:**
1. Go to [git-scm.com/download/win](https://git-scm.com/download/win)
2. Download starts automatically
3. Run the installer
4. **Use these settings:**
   - Editor: Pick any (VS Code is good)
   - PATH: "Git from command line..." (default)
   - Everything else: Keep defaults
5. Click through to finish
6. **Close Command Prompt and reopen it**
7. Type: `git --version`
8. Should see: `git version 2.something` ✅

---

### **C. Tell Git Who You Are** ⏱️ 1 minute

Open Terminal/Command Prompt and run these (replace with your info):

```bash
git config --global user.name "Andrew Kelly"
git config --global user.email "your-email@example.com"
```

Press Enter after each line.

---

### **D. Create GitHub Account** ⏱️ 3 minutes

**What is it?** Stores your code online (like Dropbox for code)

1. Go to [github.com](https://github.com)
2. Click **"Sign up"**
3. Enter email, create password
4. Pick a username (suggestion: `andrewkellystudio`)
5. Verify your email
6. Choose **"Free"** plan
7. Done! ✅

---

### **E. Create Vercel Account** ⏱️ 2 minutes

**What is it?** Hosts your site (makes it live on the internet)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Click **"Continue with GitHub"**
4. Log in to GitHub if asked
5. Click **"Authorize Vercel"**
6. Done! ✅

---

## 📦 PART 2: Set Up Your Project

### **Step 1: Download Project Files** ⏱️ 1 minute

1. Download the `skill-universe.zip` I created
2. Unzip it (double-click on Mac, right-click → Extract on Windows)
3. You'll have a folder called `skill-universe`

---

### **Step 2: Open Terminal/Command Prompt in Your Project** ⏱️ 2 minutes

**Mac:**
1. Open **Finder**
2. Find your `skill-universe` folder
3. Right-click on the folder
4. Hold **Option** key → "Open Terminal here" appears
5. Click it

**Windows:**
1. Open **File Explorer**
2. Navigate to `skill-universe` folder
3. Click in the address bar (where it shows the path)
4. Type `cmd` and press Enter
5. Command Prompt opens in that folder

**How to verify you're in the right place:**
Type: `ls` (Mac) or `dir` (Windows)
You should see files like `package.json`, `README.md`, etc.

---

### **Step 3: Run Setup Script** ⏱️ 3 minutes

**Mac:**
```bash
chmod +x setup.sh
./setup.sh
```

**Windows:**
```bash
setup.bat
```

This will:
- Check if Node and Git are installed ✅
- Install all the code libraries needed
- Take 2-3 minutes

You'll see lots of text scroll by - that's normal!

When you see **"✅ Installation complete!"** you're done!

---

### **Step 4: Start the App** ⏱️ 1 minute

Type this and press Enter:
```bash
npm run dev
```

You'll see:
```
  VITE v5.0.8  ready in 423 ms

  ➜  Local:   http://localhost:5173/
```

---

### **Step 5: Open in Browser** ⏱️ 1 minute

1. Open your web browser (Chrome, Safari, Firefox, etc.)
2. Go to: `http://localhost:5173`
3. **You should see your Skill Universe!** 🎉

Try clicking through:
- Universe View (3 galaxies)
- Click Marketing Ops
- Click AI & Innovation  
- Click a skill
- See portfolio evidence!

**It works!** ✅

---

## 🎯 PART 3: Make Your First Edit

Let's test editing the data!

### **Step 1: Open a Code Editor**

**Option A: VS Code (Recommended)**
1. Download from [code.visualstudio.com](https://code.visualstudio.com)
2. Install it
3. Open VS Code
4. File → Open Folder → Select `skill-universe`

**Option B: Any Text Editor**
- TextEdit (Mac)
- Notepad (Windows)
- Sublime Text
- Whatever you like!

---

### **Step 2: Edit Portfolio Evidence**

1. Open: `public/data/portfolio.json`
2. Find this section:
```json
"190": [
  {
    "type": "blog",
    "title": "Prompt Writing 101 for Marketers",
    "url": "https://andrewkelly.studio/blog/prompt-writing-101",
    "date": "2024-01-15"
  }
]
```

3. Change the URL to a real blog post URL (or keep it as test)
4. Change the title to match
5. Save the file (Cmd+S or Ctrl+S)

---

### **Step 3: See Your Changes**

1. Go back to your browser (still showing `localhost:5173`)
2. Refresh the page (Cmd+R or Ctrl+R)
3. Navigate to: Marketing Ops → AI & Innovation → Skill #190
4. **You should see your new link!** 🎉

**Congratulations! You just edited your skill universe!**

---

## 📤 PART 4: Deploy to the Internet (Next Step)

Once you're happy with local testing, follow **DEPLOYMENT.md** to:
1. Push code to GitHub (5 minutes)
2. Deploy to Vercel (3 minutes)
3. Set up your subdomain (10 minutes)

**Total time: ~20 minutes to go live!**

---

## 🆘 Troubleshooting

### "Command not found: node"
- Node.js didn't install properly
- Try closing Terminal/Command Prompt and reopening
- If still broken, reinstall Node.js

### "Command not found: git"
- Git didn't install properly
- Mac: Try `xcode-select --install`
- Windows: Reinstall Git

### "npm install" fails
- Make sure you're in the right folder
- Type `pwd` (Mac) or `cd` (Windows) to check
- Should end with `/skill-universe` or `\skill-universe`

### Port 5173 already in use
- Another app is running on that port
- Try: `npm run dev -- --port 3000`
- Then open `localhost:3000`

### Can't see changes after editing
- Make sure you saved the file
- Hard refresh: Cmd+Shift+R or Ctrl+Shift+R
- Check Terminal - any errors showing?

### JSON errors
- Validate your JSON: Copy the file contents
- Go to [jsonlint.com](https://jsonlint.com)
- Paste and click "Validate"
- It will show you exactly what's wrong

---

## 🎉 You Did It!

You now have:
- ✅ Node.js installed
- ✅ Git installed
- ✅ GitHub account
- ✅ Vercel account
- ✅ Project running locally
- ✅ Made your first edit

**Next:** Follow DEPLOYMENT.md to get it live on the internet!

---

## 💡 Learning Resources

**Want to understand what you're doing?**

- **Git/GitHub:** [try.github.io](https://try.github.io)
- **Node.js:** [nodejs.dev/learn](https://nodejs.dev/learn)
- **Terminal basics:** Search "command line crash course" on YouTube
- **JSON format:** [json.org](https://www.json.org)

**But you don't need to learn all this to use your Skill Universe!** 

The main thing you'll do is edit JSON files and run `git push`. That's it!

---

## ❓ Still Stuck?

If you're stuck on any step:
1. Google the exact error message
2. Check if Node/Git versions are recent (they should be)
3. Try uninstalling and reinstalling
4. Ask ChatGPT or Claude for help with the specific error

You got this! 💪
