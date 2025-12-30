# 📚 Complete Guide: Adding Galaxies, Constellations & Skills

This guide shows you how to add new content to your Skill Universe by editing JSON files only - no code changes needed!

---

## 🌌 Adding a New Galaxy

### **Step 1: Add Galaxy to universe.json**

Open `public/data/universe.json` and add to the `"galaxies"` array:

```json
{
  "galaxies": [
    {
      "id": "marketing-ops",
      ...existing galaxy...
    },
    {
      "id": "billiards",              ← New galaxy!
      "name": "Billiards",
      "icon": "🎱",
      "color": "#10b981",
      "totalSkills": 50,              ← Total across all constellations
      "completedSkills": 0,
      "inProgressSkills": 0,
      "constellationCount": 6,        ← Number of constellations you'll add
      "description": "Pool technique, strategy, and competitive play"
    }
  ],
  "constellations": {
    ...
  }
}
```

**Important:** The `"id"` must be:
- Lowercase
- No spaces (use hyphens: "coffee-espresso")
- Unique across all galaxies

---

### **Step 2: Add Constellations for the New Galaxy**

In the same file, add a new section in `"constellations"`:

```json
{
  "galaxies": [...],
  "constellations": {
    "marketing-ops": [...],
    "billiards": [                    ← New constellation section!
      {
        "id": 1,
        "name": "Fundamentals & Stance",
        "icon": "🎯",
        "color": "#10b981",
        "totalSkills": 12,
        "completedSkills": 0,
        "inProgressSkills": 0,
        "description": "Grip, stance, bridge, and body alignment"
      },
      {
        "id": 2,
        "name": "Stroke Mechanics",
        "icon": "💪",
        "color": "#3b82f6",
        "totalSkills": 8,
        "completedSkills": 0,
        "inProgressSkills": 0,
        "description": "Pendulum motion, follow-through, and consistency"
      }
      ...more constellations...
    ]
  }
}
```

**Tips:**
- Galaxy `"id"` must match: `"billiards"` in both places
- Constellation IDs can start at 1 for each galaxy
- Use different emojis and colors for visual variety

---

### **Step 3: Save and Test**

- Save `universe.json`
- Refresh browser (Ctrl + Shift + R)
- You should see your new galaxy on the Universe view!
- Click it → See constellations
- Click a constellation → See "No skills yet" (we'll add those next)

---

## ⭐ Adding a New Constellation to an Existing Galaxy

### **Step 1: Add to universe.json**

Find your galaxy's constellation array and add a new constellation:

```json
"constellations": {
  "marketing-ops": [
    ...existing 16 constellations...
    {
      "id": 17,                       ← New ID (increment from last)
      "name": "Video Marketing Ops",
      "icon": "🎬",
      "color": "#f59e0b",
      "totalSkills": 25,
      "completedSkills": 0,
      "inProgressSkills": 0,
      "description": "Video production, editing, and distribution operations"
    }
  ]
}
```

### **Step 2: Update Galaxy Totals**

Update the galaxy to reflect new constellation:

```json
{
  "id": "marketing-ops",
  "totalSkills": 843,               ← Add 25 to previous 818
  "constellationCount": 17,         ← Increment by 1
  ...
}
```

### **Step 3: Save and Test**

- Save file
- Refresh browser
- Navigate to your galaxy
- See the new constellation appear!

---

## 🎯 Adding Skills to a Constellation

### **Step 1: Open skills.json**

Find or create an entry for your constellation ID:

```json
{
  "5": {
    "_constellation": "AI & Innovation",
    "foundation": [...],
    "intermediate": [...],
    "advanced": [...]
  },
  "17": {                             ← New constellation ID
    "_constellation": "Video Marketing Ops",
    "foundation": [],
    "intermediate": [],
    "advanced": []
  }
}
```

**Important:** The key must be the constellation ID as a STRING: `"17"` not `17`

---

### **Step 2: Add Skills**

Add skills to the appropriate tier:

```json
"17": {
  "_constellation": "Video Marketing Ops",
  "foundation": [
    {
      "id": 1001,                     ← Unique skill ID
      "name": "Video strategy fundamentals",
      "status": "not-yet",            ← or "in-progress" or "completed"
      "evidenceCount": 0              ← How many portfolio items
    },
    {
      "id": 1002,
      "name": "Camera operation basics",
      "status": "not-yet",
      "evidenceCount": 0
    },
    {
      "id": 1003,
      "name": "Lighting fundamentals",
      "status": "not-yet",
      "evidenceCount": 0
    }
  ],
  "intermediate": [
    {
      "id": 1004,
      "name": "Video editing workflow",
      "status": "not-yet",
      "evidenceCount": 0
    },
    {
      "id": 1005,
      "name": "Color grading basics",
      "status": "not-yet",
      "evidenceCount": 0
    }
  ],
  "advanced": [
    {
      "id": 1006,
      "name": "Multi-camera production",
      "status": "not-yet",
      "evidenceCount": 0
    }
  ]
}
```

**Skill ID Tips:**
- Must be unique across ALL skills
- Use ranges: 1-999 (MOps), 1000-1999 (Video), 2000-2999 (Next domain)
- Helps keep them organized

**Status Values:**
- `"not-yet"` - Gray dot (not started)
- `"in-progress"` - Yellow dot (currently learning)
- `"completed"` - Green dot (mastered with evidence)

---

### **Step 3: Update Constellation Totals**

Go back to `universe.json` and update your constellation:

```json
{
  "id": 17,
  "name": "Video Marketing Ops",
  "totalSkills": 6,                 ← Count: 3 foundation + 2 intermediate + 1 advanced
  "completedSkills": 0,
  "inProgressSkills": 0,
  ...
}
```

---

### **Step 4: Save and Test**

- Save `skills.json`
- Save `universe.json`
- Refresh browser
- Navigate to your constellation
- See all your skills! ✅

---

## 📚 Adding Portfolio Evidence for a Skill

### **Step 1: Complete a Skill**

Update the skill in `skills.json`:

```json
{
  "id": 1001,
  "name": "Video strategy fundamentals",
  "status": "completed",            ← Changed from "not-yet"
  "evidenceCount": 2                ← Will add 2 pieces of evidence
}
```

---

### **Step 2: Add Evidence to portfolio.json**

Open `public/data/portfolio.json`:

```json
{
  "1001": [                          ← Skill ID as STRING
    {
      "type": "blog",                ← blog, tool, video, case, github
      "title": "Video Marketing Strategy Guide",
      "url": "https://andrewkelly.studio/blog/video-strategy",
      "date": "2025-01-15"
    },
    {
      "type": "video",
      "title": "How to Plan Video Content",
      "url": "https://youtube.com/watch?v=example",
      "date": "2025-01-20"
    }
  ]
}
```

**Evidence Types:**
- `"blog"` - Blog posts (blue icon)
- `"tool"` - Tools/apps you built (purple icon)
- `"video"` - Video tutorials (red icon)
- `"case"` - Case studies (green icon)
- `"github"` - GitHub repositories (gray icon)

---

### **Step 3: Update Progress Counts**

Update the constellation in `universe.json`:

```json
{
  "id": 17,
  "name": "Video Marketing Ops",
  "totalSkills": 6,
  "completedSkills": 1,             ← Increment by 1
  "inProgressSkills": 0,
  ...
}
```

Update the galaxy totals:

```json
{
  "id": "marketing-ops",
  "totalSkills": 843,
  "completedSkills": 1,             ← Increment by 1
  "inProgressSkills": 0,
  ...
}
```

---

### **Step 4: Save and Test**

- Save all 3 files
- Refresh browser
- Navigate to your skill
- Click it → See your portfolio evidence! 🎉

---

## 📋 Complete Workflow Example

**Scenario:** Add a Coffee galaxy with 2 constellations and 5 skills

### **1. Add Galaxy (`universe.json`)**

```json
{
  "galaxies": [
    ...existing galaxies...
    {
      "id": "coffee-espresso",
      "name": "Coffee & Espresso",
      "icon": "☕",
      "color": "#d97706",
      "totalSkills": 5,
      "completedSkills": 0,
      "inProgressSkills": 0,
      "constellationCount": 2,
      "description": "Craft coffee knowledge from bean to cup"
    }
  ]
}
```

### **2. Add Constellations (`universe.json`)**

```json
"constellations": {
  ...existing constellations...
  "coffee-espresso": [
    {
      "id": 1,
      "name": "Coffee Fundamentals",
      "icon": "☕",
      "color": "#d97706",
      "totalSkills": 3,
      "completedSkills": 0,
      "inProgressSkills": 0,
      "description": "Bean origins, roast levels, and brewing basics"
    },
    {
      "id": 2,
      "name": "Espresso Technique",
      "icon": "⚡",
      "color": "#78350f",
      "totalSkills": 2,
      "completedSkills": 0,
      "inProgressSkills": 0,
      "description": "Dialing in shots and extraction"
    }
  ]
}
```

### **3. Add Skills (`skills.json`)**

```json
{
  "1": {
    "_constellation": "Coffee Fundamentals",
    "foundation": [
      {
        "id": 2001,
        "name": "Understanding coffee origins",
        "status": "not-yet",
        "evidenceCount": 0
      },
      {
        "id": 2002,
        "name": "Roast level differences",
        "status": "not-yet",
        "evidenceCount": 0
      },
      {
        "id": 2003,
        "name": "Basic brewing methods",
        "status": "not-yet",
        "evidenceCount": 0
      }
    ],
    "intermediate": [],
    "advanced": []
  },
  "2": {
    "_constellation": "Espresso Technique",
    "foundation": [
      {
        "id": 2004,
        "name": "Espresso machine setup",
        "status": "not-yet",
        "evidenceCount": 0
      },
      {
        "id": 2005,
        "name": "Dialing in espresso",
        "status": "not-yet",
        "evidenceCount": 0
      }
    ],
    "intermediate": [],
    "advanced": []
  }
}
```

### **4. Test**

- Save all files
- Refresh browser
- Universe → See Coffee galaxy ✅
- Click Coffee → See 2 constellations ✅
- Click "Coffee Fundamentals" → See 3 skills ✅
- Click "Espresso Technique" → See 2 skills ✅

---

## ✅ Checklist for Adding New Content

### **Adding a Galaxy:**
- [ ] Add galaxy to `universe.json` → `galaxies` array
- [ ] Add constellation section to `universe.json` → `constellations` object
- [ ] Galaxy ID matches constellation key exactly
- [ ] Constellation count matches number added
- [ ] Total skills matches sum of constellation totals
- [ ] Save and test

### **Adding a Constellation:**
- [ ] Add to appropriate galaxy array in `universe.json`
- [ ] Update galaxy `constellationCount`
- [ ] Update galaxy `totalSkills`
- [ ] Save and test

### **Adding Skills:**
- [ ] Add constellation section to `skills.json`
- [ ] Use constellation ID as key (as string!)
- [ ] Add skills to appropriate tiers
- [ ] Use unique skill IDs
- [ ] Update constellation `totalSkills` in `universe.json`
- [ ] Save and test

### **Adding Evidence:**
- [ ] Update skill status to "completed" in `skills.json`
- [ ] Update skill `evidenceCount`
- [ ] Add evidence array to `portfolio.json`
- [ ] Use skill ID as key (as string!)
- [ ] Update constellation `completedSkills` in `universe.json`
- [ ] Update galaxy `completedSkills` in `universe.json`
- [ ] Save and test

---

## 🆘 Troubleshooting

### **"No skills appear"**
- Check constellation ID in `universe.json` matches key in `skills.json`
- Make sure skill ID is a STRING: `"17"` not `17`

### **"Constellation doesn't show up"**
- Check galaxy ID matches exactly: `"billiards"` in both places
- Verify JSON is valid at jsonlint.com

### **"Evidence doesn't appear"**
- Check skill ID in `portfolio.json` matches `skills.json`
- Make sure it's a STRING: `"2001"` not `2001`
- Check `evidenceCount` is greater than 0

### **"Progress bars are wrong"**
- Manually count and verify totals
- Galaxy total = sum of all constellation totals
- Constellation total = count of all skills in that constellation

---

## 💡 Pro Tips

1. **Start Small:** Add 1 galaxy, 2 constellations, 5 skills first. Test it. Then expand.

2. **Use ID Ranges:**
   - MOps skills: 1-999
   - Coffee skills: 2000-2999
   - Billiards skills: 3000-3999
   - Keeps IDs organized!

3. **Validate JSON:** After big edits, paste into jsonlint.com

4. **Keep Backups:** Copy files before major changes

5. **Update Incrementally:** 
   - Add galaxy → Test
   - Add constellations → Test
   - Add skills → Test
   - Don't do everything at once!

---

## 🚀 You're All Set!

You can now add unlimited:
- ✅ Galaxies (Marketing, Coffee, Billiards, Photography, Cooking, etc.)
- ✅ Constellations (domains within each galaxy)
- ✅ Skills (specific abilities)
- ✅ Portfolio Evidence (proof of mastery)

All by editing JSON files - no code changes ever needed! 🎉
