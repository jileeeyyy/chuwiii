# 💗 Snoopy Love Website - Customization Guide

Welcome! This guide will help you easily customize the website with your own personal touches.

## 📝 Quick Start

### 1. **Customize the Love Letter Message**

Open `script.js` and find this section (around line 12):

```javascript
const CONFIG = {
    letterMessage: `Dear my love,

I want to say I'm sorry. 
Words can't express how much you mean to me.
...`,
```

Replace the text between the backticks with your own heartfelt message. You can include emojis too! ✨

**Alternative Method (in console):**
```javascript
updateLetterMessage("Your new message here!")
```

---

### 2. **Add Your Custom Photo**

1. Create a folder named `assets` in the same directory as the website files (it should already exist)
2. Place your photo in `/assets/photo.jpg`
3. If you use a different filename or format, update `index.html` line 149:
   ```html
   <img src="assets/photo.jpg" alt="Our moment" class="letter-photo"
   ```

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`

**Alternative Method (in console):**
```javascript
setPhotoSource('assets/your-custom-photo.jpg')
```

---

### 3. **Add Background Music**

1. Download or find a romantic royalty-free song (MP3 format recommended)
2. Place the audio file in `/assets/music.mp3`
3. If you use a different filename, update `index.html` line 202:
   ```html
   <source src="assets/music.mp3" type="audio/mpeg">
   ```

**Royalty-Free Music Sources:**
- Pixabay Music (pixabay.com/music)
- YouTube Audio Library
- Bensound (bensound.com)
- Free Music Archive

**Alternative Method (in console):**
```javascript
setBackgroundMusic('assets/custom-romantic-song.mp3')
```

---

## 🎨 Design Customizations

### Change Color Scheme

Open `style.css` and modify the root variables (around line 8):

```css
:root {
    --primary-color: #FFB3D0;      /* Main pink */
    --secondary-color: #FFF0F6;    /* Light pink */
    --accent-color: #FF69B4;       /* Hot pink text */
    --cream-color: #FFFAF0;        /* Cream background */
    --light-pink: #FFE4F0;         /* Soft pink */
    /* ... other colors ... */
}
```

**Color Palette Ideas:**
- **Purple Romance:** `#DDA0DD`, `#EED0FF`, `#DA70D6`
- **Peachy Sunset:** `#FFDAB9`, `#FFE4C4`, `#FFB347`
- **Minty Fresh:** `#98FF98`, `#E0F8E0`, `#90EE90`

---

### Change Font

The site uses "Fredoka" and "Indie Flower" Google Fonts. To change:

1. Open `index.html` and find the font import (line 5):
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Fredoka:wght@400;500;700&display=swap" rel="stylesheet">
   ```

2. Visit [Google Fonts](https://fonts.google.com) and find a font you like
3. Replace the font name and update CSS variable

**Good Font Pairs for Romance:**
- Playfair Display + Quicksand
- Cormorant Garamond + Montserrat
- Pacifico + Raleway

---

### Customize Dog Doodles

The cute dog illustrations are SVG drawings in the HTML. You can:

1. **Change colors:** Modify the `fill` attributes in the SVG code
2. **Change expressions:** Adjust the `<path>` and `<circle>` coordinates
3. **Replace with your own:** Find the `<svg>` blocks in `index.html` and replace them

**Location in HTML:**
- Screen 1: Line 23 (happy dog)
- Screen 2: Line 62 (cute dog)
- Screen 3: Line 92 (sad dog)
- Screen 5: Line 227 (hopeful dog)
- Success: Line 255 (victory dog)

---

## ⚙️ Text Customizations

### Change Screen Text

All text is easily editable in `index.html`. Here are the key sections:

**Screen 1 (Welcome):**
- Line 22: `<h1 class="greeting">Hiiiii Babyyy 💗</h1>`
- Line 23: `<p class="subtitle">I made something for you >.<</p>`

**Screen 2 (Confirmation):**
- Line 62: `<h2>Do you want to open it? (｡•̀ᴗ-)✧</h2>`
- Line 64: `<button ... >Open it 💌</button>`
- Line 65: `<button ... >No. ty</button>`

**Screen 5 (Final Question):**
- Line 235: `<h2>Will you forgive me? 🥺</h2>`
- Line 237: `<button ... >Yes bb 💖</button>`
- Line 238: `<button ... >No 😭</button>`

**Success Screen:**
- Line 276: `<h1 class="success-text">YAYYYY I LOVE YOU SO MUCHHH 💕</h1>`

---

## 🎬 Animation Customizations

### Adjust Animation Speed

In `style.css`, look for animation durations:

```css
animation: fall 8s linear infinite;      /* Change 8s to adjust speed */
animation: happy-bounce 2s ease-in-out;  /* Change 2s for bounce speed */
```

### Change Transition Smoothness

In `style.css`, adjust this variable (line 12):
```css
--transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
```

Lower values = faster (e.g., `0.2s`)
Higher values = slower (e.g., `0.5s`)

---

## 📱 Testing Your Customizations

### View Locally
1. Open `index.html` in your browser (double-click the file)
2. Or if using a local server: `http://localhost/snoopy/`

### Test on Mobile
- Use Chrome DevTools (F12) → Toggle device toolbar
- Or use your phone to navigate to your local IP address

### Check All Screens
- Screen 1: Opens automatically
- Screen 2: Click "Next!!"
- Screen 3: Click "No. ty" multiple times
- Screen 4: Click "Open it 💌"
- Screen 5: Click "One more thing... 💗"
- Success: Click "Yes bb 💖"

---

## 🎵 Music Tips

### Audio Issues?

If music doesn't play:
1. **Browser autoplay policy:** Click the music button to start playback
2. **File format:** Use MP3 format for best compatibility
3. **File location:** Ensure `assets/music.mp3` exists
4. **Localhost:** Some browsers block audio from file:// URLs. Use a local server.

### Recommended Settings
- **Bitrate:** 128 kbps (good quality, smaller file)
- **Format:** MP3
- **Duration:** 3-5 minutes (loop-friendly)

---

## 🔒 Sharing Your Website

### Option 1: Self-Hosted (Easiest)
- Keep the folder on your computer
- Share the local URL on the same WiFi: `192.168.x.x/snoopy`
- Or upload to a web host (GitHub Pages, Netlify, Vercel)

### Option 2: GitHub Pages (Free!)
1. Create a GitHub account
2. Upload this folder to a repository
3. Enable GitHub Pages in Settings
4. Share the link!

### Option 3: Web Hosting
- Upload to services like:
  - Netlify (free)
  - Vercel (free)
  - Render (free)
  - Any traditional web host

---

## 💡 Advanced Customizations

### Custom Styling

In `style.css`, you can modify:
- Border radius: `border-radius: 30px;` → `border-radius: 50px;` (more round)
- Shadows: `box-shadow:` values
- Background blur: `backdrop-filter: blur(10px);`
- Card opacity: `background: rgba(255, 240, 246, 0.7);`

### JavaScript Customizations

In `script.js`, you can:
- Change typing speed: Line 15 `typingSpeed: 40` (lower = faster)
- Change confetti amount: Line 42 `for (let i = 0; i < 40; i++)` (adjust 40)
- Add more hearts: Duplicate `<span class="heart">💗</span>`

---

## 🐛 Troubleshooting

### Music not playing?
- Ensure file is in `/assets/music.mp3`
- Check browser console for errors (F12)
- Click music button to start playback manually

### Photo not showing?
- Verify file path in HTML matches actual file location
- Check file format is supported (.jpg, .png, .webp, .gif)
- Ensure file isn't corrupted

### Buttons not working?
- Check browser console for JavaScript errors (F12)
- Verify you didn't accidentally delete any HTML elements
- Try clearing browser cache

### Animations not smooth?
- Reduce number of animations in CSS
- Check device performance
- Try closing other browser tabs

---

## 🎉 Extra Ideas

- Add more custom screens with `goToScreen(6)` in JavaScript
- Create seasonal versions with different colors
- Add video instead of static photo
- Include voice message button
- Add memory gallery slideshow

---

## 📞 Need Help?

The code is well-commented! Look for `// ================================================` sections to understand different parts.

**Key files:**
- `index.html` - Structure & content
- `style.css` - Colors, fonts, animations
- `script.js` - Interactive features

Enjoy creating your romantic experience! 💗✨
