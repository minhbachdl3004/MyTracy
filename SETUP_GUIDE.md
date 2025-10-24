# 🎉 Setup Guide - Happy Birthday My Love 💖

This guide will help you get the birthday website up and running quickly.

## 📋 Step-by-Step Setup

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- React 18
- Framer Motion (for smooth animations)
- Vite (fast development server)
- TailwindCSS (styling)

### Step 2: Add Your Photos

1. Create a folder: `src/assets/photos/`
2. Add 8 photos of your choice
3. Name them: `photo1.jpg`, `photo2.jpg`, ... `photo8.jpg` (or any naming you prefer)

Then update `src/components/PhotoSlideshow.jsx`:

```jsx
// Replace the photos array (around line 15) with:
const photos = [
  { id: 1, url: '/src/assets/photos/photo1.jpg', alt: 'Our first date' },
  { id: 2, url: '/src/assets/photos/photo2.jpg', alt: 'Beach vacation' },
  { id: 3, url: '/src/assets/photos/photo3.jpg', alt: 'Mountain trip' },
  { id: 4, url: '/src/assets/photos/photo4.jpg', alt: 'City lights' },
  { id: 5, url: '/src/assets/photos/photo5.jpg', alt: 'Sunset together' },
  { id: 6, url: '/src/assets/photos/photo6.jpg', alt: 'Cozy evening' },
  { id: 7, url: '/src/assets/photos/photo7.jpg', alt: 'Special moment' },
  { id: 8, url: '/src/assets/photos/photo8.jpg', alt: 'Forever together' },
]
```

### Step 3: Add Background Music (Optional)

1. Create a folder: `src/assets/music/`
2. Add your romantic music file (MP3 format recommended)
3. Update `src/components/MusicPlayer.jsx`:

```jsx
// Replace the musicUrl (around line 17) with:
const musicUrl = '/src/assets/music/your-romantic-song.mp3'
```

**Recommended music sources:**
- YouTube Audio Library (royalty-free)
- Epidemic Sound
- Your own music collection

### Step 4: Personalize the Footer

Edit `src/App.jsx` (around line 79):

```jsx
Made with love by [Your Name] 💌
```

Replace `[Your Name]` with your actual name!

### Step 5: Run the Development Server

```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

### Step 6: Test on Mobile

1. Find your computer's local IP address:
   - Windows: Run `ipconfig` in terminal
   - Mac/Linux: Run `ifconfig` in terminal

2. On your phone's browser, visit:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```

## 🚀 Deploying to Production

### Option 1: Vercel (Recommended - Free & Easy)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   npm run build
   vercel
   ```

3. Follow the prompts - your site will be live in seconds!

### Option 2: Netlify (Free)

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/birthday",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🎨 Customization Tips

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  'romantic-pink': '#ff69b4',  // Your preferred pink
  'soft-gold': '#ffd700',       // Your preferred gold
  'night-sky': '#0a0e27',       // Background color
}
```

### Adjust Slideshow Speed

In `src/components/PhotoSlideshow.jsx`:

```js
}, 4000) // Change to 3000 for faster, 6000 for slower
```

### More/Less Fireworks

In `src/components/Fireworks.jsx`:

```js
if (Math.random() < 0.03) {  // Increase to 0.05 for more fireworks
  fireworks.push(new Firework())
}
```

## ⚠️ Troubleshooting

### Issue: Blank page

**Solution:** Check browser console (F12) for errors. Make sure all dependencies are installed.

### Issue: Photos not loading

**Solution:** 
- Check file paths are correct
- Use forward slashes `/` in paths
- Ensure photos are in the correct folder

### Issue: Music not playing

**Solution:**
- Browsers block autoplay. User must click the "Play Music" button
- Check file path is correct
- Use MP3 format for best compatibility

### Issue: Fireworks are laggy

**Solution:**
- Reduce firework frequency (see customization above)
- Close other browser tabs
- Test on a different device

## 📱 Best Practices

1. **Photo Size**: Optimize photos to 800x600px or 1200x900px for faster loading
2. **Music Length**: Use a 3-5 minute loop
3. **Testing**: Test on both Chrome (desktop) and Safari (mobile)
4. **Sharing**: Use a custom domain or short URL for easy sharing

## 💝 Final Checklist

Before sharing with your loved one:

- [ ] All 8 photos added and loading correctly
- [ ] Background music added and plays smoothly
- [ ] Personalized footer with your name
- [ ] Tested on mobile device
- [ ] Tested on desktop browser
- [ ] Fireworks are displaying beautifully
- [ ] All animations are smooth
- [ ] Photo slideshow transitions work perfectly

## 🆘 Need Help?

If you encounter any issues:

1. Check the browser console for errors (Press F12)
2. Verify all files are in the correct locations
3. Try clearing browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Make sure Node.js version is 16 or higher: `node --version`

---

**Have fun and make someone's birthday special! 💖**

