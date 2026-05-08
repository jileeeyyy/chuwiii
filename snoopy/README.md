# 💗 Snoopy Love Website

> A cute, interactive apology/love website with adorable dog doodles, soft animations, and romantic vibes.

## 🎯 Features

✨ **Interactive Screens:**
- 5 beautiful, flowing screens with smooth transitions
- Cute Snoopy-inspired dog doodle illustrations (hand-drawn SVG)
- Soft pink & cream color palette with glassmorphism effects

💫 **Playful Interactions:**
- "No. ty" button that dodges away (screen 2)
- "No 😭" button that teleports around screen (screen 5)
- Confetti explosion on success
- Floating hearts animation
- Cursor sparkle effects

🎬 **Romantic Features:**
- Typing animation for love letter
- Falling hearts background
- Background music toggle
- Custom photo section
- Multiple cute dog expressions
- Bouncing heart decorations

📱 **Fully Responsive:**
- Works beautifully on phones, tablets, and desktops
- Touch-friendly interface
- Optimized for all screen sizes

🎨 **Easy Customization:**
- Simple text edits in HTML
- Custom photo support
- Custom music support
- Color scheme adjustable in CSS
- All animations in pure CSS (no frameworks!)

---

## 📁 Project Structure

```
snoopy/
├── index.html                 # Main HTML structure
├── style.css                  # All styling & animations
├── script.js                  # Interactive features
├── CUSTOMIZATION_GUIDE.md     # How to personalize it
├── assets/
│   ├── photo.jpg             # Replace with your photo
│   ├── music.mp3             # Replace with your music
│   └── README.txt            # Asset instructions
└── README.md                 # This file!
```

---

## 🚀 How to Use

### Quick Start
1. **View the website:** Open `index.html` in your browser
2. **Customize:** Follow the `CUSTOMIZATION_GUIDE.md`
3. **Add your assets:** 
   - Place your photo in `assets/photo.jpg`
   - Place your music in `assets/music.mp3`
4. **Edit text:** Update messages in `script.js` and `index.html`

### Screen Flow

```
Screen 1: Welcome greeting
    ↓ Click "Next!!"
Screen 2: Confirm opening (No button dodges!)
    ↓ Click "Open it 💌"
Screen 4: Love letter with photo & music
    ↓ Click "One more thing... 💗"
Screen 5: Final question (No button teleports!)
    ↓ Click "Yes bb 💖"
Success: Confetti & celebration!
```

---

## 🎨 Customization Quick Links

See `CUSTOMIZATION_GUIDE.md` for detailed instructions:

- **Change the love letter message** → `script.js` line 15
- **Add your photo** → `assets/photo.jpg`
- **Add romantic music** → `assets/music.mp3`
- **Change colors** → `style.css` root variables (line 8)
- **Modify text on all screens** → `index.html`
- **Adjust animation speeds** → `style.css` animation durations

---

## 💡 Key Technologies

- **HTML5** - Semantic structure
- **CSS3** - Animations, gradients, glassmorphism
- **Vanilla JavaScript** - No frameworks needed!
- **SVG** - Custom dog illustrations
- **Google Fonts** - Beautiful typography

---

## 🎬 Screen Descriptions

### Screen 1: "Hiiiii Babyyy 💗"
- Cute happy dog doodle bouncing
- Welcome message
- "Next!!" button with hover animation
- Bouncing hearts around button

### Screen 2: "Do you want to open it?"
- Cute dog with big eyes
- "Open it 💌" button (primary)
- "No. ty" button (dodges away when you try to click it!)
- Funny, playful interaction
- After clicking No 3 times → sad dog screen

### Screen 3: "Sad Dog Screen"
- Droopy, sad dog doodle
- "Awh... Let's try again bb 🥺"
- Retry button → goes back to Screen 2
- Auto-dodges button again after 2 seconds

### Screen 4: "Love Letter"
- Elegant letter card with:
  - Title: "For You 💗"
  - Photo section (add your custom image)
  - Typing animated message
  - Floating hearts decoration
  - Music toggle button 🎵
  - "One more thing... 💗" button
- Glassmorphism effect
- Smooth scrolling

### Screen 5: "Will you forgive me?"
- Hopeful dog doodle
- Final question
- "Yes bb 💖" button (happy path)
- "No 😭" button (teleports/dodges around screen)
- Playful interaction

### Success Screen: Celebration!
- Large happy dog doing victory spin
- "YAYYYY I LOVE YOU SO MUCHHH 💕"
- Confetti explosion
- Floating hearts animation
- "Want to relive the moment? 💗" restart button

---

## 🎨 Design Highlights

### Color Palette
- **Primary Pink:** `#FFB3D0`
- **Hot Pink:** `#FF69B4`
- **Light Pink:** `#FFE4F0`
- **Soft Background:** `#FFF0F6`
- **Cream:** `#FFFAF0`

### Typography
- **Headings:** Fredoka (modern, friendly)
- **Letters:** Indie Flower (handwritten, romantic)

### Effects
- ✨ Glassmorphism on cards
- 🎯 Glow shadows with pink tint
- 💫 Smooth cubic-bezier transitions
- 🎭 Bounce & wiggle animations
- 🌸 Falling hearts background
- ✨ Cursor sparkle trail

---

## 📱 Responsive Breakpoints

- **Desktop:** Full experience with all animations
- **Tablet (768px):** Optimized layouts
- **Mobile (480px):** Compact cards, touch-friendly buttons

---

## 🎵 Music Tips

- **Format:** MP3 (best compatibility)
- **Duration:** 3-5 minutes (good for looping)
- **Bitrate:** 128 kbps recommended
- **Free sources:** Pixabay Music, YouTube Audio Library, Bensound
- **Note:** Click music button to enable audio (browser autoplay policy)

---

## 🔧 Browser Compatibility

✅ **Works on:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

**Features used:**
- CSS Grid & Flexbox
- CSS Animations & Transitions
- SVG Graphics
- LocalStorage (for music state)
- Web Audio API

---

## 🎁 Extra Features

### Easter Egg 🥚
Try the Konami code! (↑ ↑ ↓ ↓ ← → ← →)
Triggers a special heart rain effect!

### Helper Functions
You can call these in the browser console:

```javascript
// Update love letter
updateLetterMessage("Your new message here!")

// Set custom photo
setPhotoSource('assets/my-photo.jpg')

// Set custom music
setBackgroundMusic('assets/my-music.mp3')
```

---

## 📝 Customization Examples

### Change the greeting text
In `index.html` line 22:
```html
<h1 class="greeting">Hiiiii Babyyy 💗</h1>
```
Change to anything you like! (with emojis!)

### Change dog colors
Find any `<ellipse fill="#FFC0D0">` in the SVG and change the color code

### Adjust animation speed
In `style.css`, find `animation: happy-bounce 2s` and change `2s` to your preferred duration

---

## 🎯 Tips for Best Results

1. **Photo:** Use a nice, well-lit photo (square or landscape)
2. **Music:** Choose something romantic but not too loud
3. **Message:** Write from the heart! Be genuine and personal
4. **Testing:** View on both desktop and mobile
5. **Timing:** Consider when/where they'll open it 💭

---

## 📞 Need Help?

1. **Can't see changes?** Clear your browser cache (Ctrl+Shift+Delete)
2. **Music not playing?** Check browser console (F12), some browsers block autoplay
3. **Photo not showing?** Verify file path matches exactly
4. **Buttons not working?** Check file names and HTML syntax

See `CUSTOMIZATION_GUIDE.md` for detailed troubleshooting!

---

## 🎉 Have Fun!

This website is meant to be cute, playful, and romantic. Customize it to fit your relationship! Add personal touches, inside jokes, and genuine emotions. 

Make it TikTok-worthy and share the love! 💖✨

---

**Created with ❤️ for all the adorable apologies and beautiful reconciliations!**

*Snoopy-inspired aesthetic • No copyrighted assets • 100% customizable • Fully responsive • Pure CSS animations*
