# Warhammer Online: Return of Reckoning - Gear Recommendation Tool

A simple, no-hosting-required tool for finding the best gear for your character based on class, level, and renown rank.

## How to Use

### Option 1: Quick Open (Windows)
Double-click `open.bat` to launch the app in your default browser.

### Option 2: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"
3. Your browser will open automatically

### Option 3: Manual
1. Open `index.html` directly in any modern web browser
2. The app works entirely offline - no internet connection needed

## How the Tool Works

1. **Select Your Class** - Choose from any of the 32 careers across all factions
2. **Enter Your Level** - Your current character level (1-40)
3. **Enter Your Renown Rank** - Your current renown rank (1-80)
4. **Get Recommendations** - The tool displays optimized gear for your character's progression tier

## Features

- ✅ No server hosting required
- ✅ Works offline completely
- ✅ All 32 character classes supported
- ✅ Gear tiers based on level + renown progression
- ✅ Clean, easy-to-use interface
- ✅ Shareable - just send the files to your friends

## Sharing with Friends

Since this is a static HTML app with no backend:

1. **Local File** - Copy the folder to their computer and run `open.bat`
2. **GitHub Pages** - Push to GitHub and enable Pages (automatic free hosting)
3. **Google Drive** - Upload and share the HTML file
4. **Dropbox** - Share the folder link

## Data Structure

The app includes:
- **32 Classes** across all factions (Empire, Dwarf, High Elf, Wood Elf, Chaos, Dark Elf, Orc, Goblin)
- **4 Gear Tiers** (Starter, Low-Tier, Mid-Tier, Endgame)
- **Customizable Gear Lists** - Easily edit `gearData.js` to add/change gear

## Customizing Gear

Edit `gearData.js` to add your own gear recommendations. Each gear set includes:
- Head
- Chest
- Hands
- Legs
- Feet
- Main Hand (weapon)
- Off Hand (shield/secondary weapon)
- Rings (high-tier)
- Back (cloak/cape)

## Browser Compatibility

Works on:
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Any modern browser

## Notes

- Progression tiers are determined by: `Level >= 31 AND Renown >= 61` for Endgame, etc.
- The tool is completely offline - all data is stored locally in the HTML/JS files
- No tracking, no analytics, no ads
- No installation required

---

Enjoy your adventures in Warhammer Online: Return of Reckoning! ⚔️
