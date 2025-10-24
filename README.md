# Happy Birthday My Love 💖

A stunning, romantic single-page birthday greeting website featuring fireworks animations, photo slideshows with sparkle effects, and background music.

![Birthday Website Preview](https://img.shields.io/badge/Made%20with-Love-ff69b4?style=for-the-badge)

## ✨ Features

- 🎆 **Realistic Fireworks Animation**: Canvas-based fireworks that explode beautifully across the night sky
- 🌌 **Night Sky Background**: Twinkling stars create a romantic atmosphere
- 💖 **Heart Particles**: Floating hearts that rise gracefully from bottom to top
- 🖼️ **Photo Slideshow**: 8 photos with sparkle effects and smooth fade transitions
- 🎵 **Background Music**: Romantic instrumental music with play/pause controls
- ✨ **Glowing Text**: Animated title with pink and gold glow effects
- 📱 **Fully Responsive**: Beautiful on both mobile and desktop devices
- 🎨 **Pink & Gold Theme**: Romantic color scheme throughout

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
happy-birthday-my-love/
├── src/
│   ├── components/          # React components
│   │   ├── Fireworks.jsx    # Canvas-based fireworks animation
│   │   ├── PhotoSlideshow.jsx  # Image slideshow with effects
│   │   ├── MusicPlayer.jsx  # Audio player component
│   │   ├── NightSky.jsx     # Starry background
│   │   └── HeartParticles.jsx  # Floating hearts
│   ├── styles/
│   │   └── index.css        # Global styles and animations
│   ├── assets/              # Images and music files
│   │   ├── photos/          # Place your 8 photos here
│   │   └── music/           # Place background music here
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Application entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🖼️ Adding Your Photos

1. Create a `photos` folder inside `src/assets/`
2. Add 8 photos (any format: jpg, png, etc.)
3. Update the `photos` array in `src/components/PhotoSlideshow.jsx`:

```jsx
const photos = [
  { id: 1, url: '/src/assets/photos/photo1.jpg', alt: 'Memory 1' },
  { id: 2, url: '/src/assets/photos/photo2.jpg', alt: 'Memory 2' },
  // ... add all 8 photos
]
```

## 🎵 Adding Custom Music

1. Create a `music` folder inside `src/assets/`
2. Add your romantic instrumental MP3 file
3. Update the `musicUrl` in `src/components/MusicPlayer.jsx`:

```jsx
const musicUrl = '/src/assets/music/your-song.mp3'
```

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js`:

```js
colors: {
  'romantic-pink': '#ff69b4',  // Change to your preferred pink
  'soft-gold': '#ffd700',       // Change to your preferred gold
  'night-sky': '#0a0e27',       // Change background color
}
```

### Adjusting Animation Speed

**Fireworks:** Edit `src/components/Fireworks.jsx`
```js
if (Math.random() < 0.03) {  // Increase for more fireworks
  fireworks.push(new Firework())
}
```

**Slideshow:** Edit `src/components/PhotoSlideshow.jsx`
```js
}, 4000) // Change interval (milliseconds)
```

### Personalizing Footer

Edit `src/App.jsx`:
```jsx
Made with love by [Your Name] 💌
```
Replace `[Your Name]` with your actual name!

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **HTML5 Canvas** - Fireworks rendering

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Optimization

- Fireworks use Canvas for smooth 60fps animation
- Images are lazy-loaded
- Animations use GPU acceleration
- Efficient particle management (automatic cleanup)

## 💝 Tips for Best Experience

1. **Photos**: Use high-quality images (800x600px or larger)
2. **Music**: Choose a soft, romantic instrumental (3-5 minutes)
3. **Testing**: Test on both desktop and mobile before sharing
4. **Hosting**: Deploy on Vercel, Netlify, or GitHub Pages for free

## 📝 License

This project is open source and available for personal use.

## 💌 Credits

Made with love and care for that special someone 💖

---

**Note:** Remember to replace placeholder photos and music with your own files before deploying!

