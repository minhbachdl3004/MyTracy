# 📁 Project Structure

## Overview
This document explains the organization of the birthday website project.

## Directory Layout

```
Tracy/
│
├── 📄 index.html                 # Main HTML entry point
├── 📄 package.json               # Project dependencies and scripts
├── 📄 vite.config.js             # Vite build configuration
├── 📄 tailwind.config.js         # TailwindCSS customization
├── 📄 postcss.config.js          # PostCSS configuration
├── 📄 .gitignore                 # Git ignore rules
│
├── 📖 README.md                  # Comprehensive project documentation
├── 📖 SETUP_GUIDE.md             # Detailed setup instructions
├── 📖 QUICKSTART.md              # 3-step quick start guide
├── 📖 PROJECT_STRUCTURE.md       # This file
│
├── 🖼️ [8 photo files]            # Your birthday photos
│   ├── angel.png
│   ├── angelllllllll.png
│   ├── nàng thơ.png
│   ├── love you so muchhhhhhhhh.png
│   ├── loveeeeeeee you.png
│   ├── láo cá chó.png
│   ├── ỏooooooooooooooo.png
│   └── tracyyyyyyyyyyy.png
│
└── 📂 src/                       # Source code directory
    │
    ├── 📄 main.jsx               # Application entry point
    ├── 📄 App.jsx                # Main application component
    │
    ├── 📂 components/            # React components
    │   ├── 🎆 Fireworks.jsx       # Canvas-based fireworks animation
    │   ├── 🌌 NightSky.jsx        # Twinkling stars background
    │   ├── 💖 HeartParticles.jsx  # Floating heart animations
    │   ├── 🖼️ PhotoSlideshow.jsx  # Photo carousel with sparkles
    │   └── 🎵 MusicPlayer.jsx     # Background music controller
    │
    ├── 📂 styles/                # Global styles
    │   └── 📄 index.css          # TailwindCSS + custom animations
    │
    └── 📂 assets/                # Static assets (empty, for future use)
        └── 📄 .gitkeep
```

## Component Breakdown

### 🎆 Fireworks.jsx
- **Purpose**: Realistic fireworks animation
- **Technology**: HTML5 Canvas API
- **Features**: 
  - Particle physics with gravity
  - Circular explosion patterns
  - Multiple colors (pink, gold, orange)
  - Automatic cleanup for performance
- **Customizable**: Frequency, colors, particle count

### 🌌 NightSky.jsx
- **Purpose**: Starry night background
- **Features**:
  - 150 randomly positioned stars
  - Twinkling animation
  - Varied sizes and animation speeds
- **Performance**: Lightweight, CSS-based

### 💖 HeartParticles.jsx
- **Purpose**: Romantic floating hearts
- **Features**:
  - Hearts rise from bottom to top
  - Rotation animation
  - Automatic spawning every 2 seconds
  - Fade out effect
- **Customizable**: Spawn rate, animation speed

### 🖼️ PhotoSlideshow.jsx
- **Purpose**: Display your 8 photos with effects
- **Features**:
  - Smooth fade transitions (Framer Motion)
  - 12 sparkle particles around each photo
  - Navigation dots
  - Auto-advance every 4 seconds
  - Manual navigation
  - Photo counter
  - Pink/gold gradient border
- **Customizable**: Transition speed, sparkle count

### 🎵 MusicPlayer.jsx
- **Purpose**: Background music controller
- **Features**:
  - Play/Pause button
  - Visual music indicator (animated bars)
  - Looping audio
  - Responsive design
- **Customizable**: Music file path

### 📄 App.jsx
- **Purpose**: Main application orchestration
- **Features**:
  - Component composition
  - Entrance animations (Framer Motion)
  - Responsive layout
  - Staggered animation timing
- **Customizable**: Animation delays, layout

## Styling System

### TailwindCSS
- Utility-first CSS framework
- Custom colors: `romantic-pink`, `soft-gold`, `night-sky`
- Custom animations: `glow`, `float`, `sparkle`

### Custom CSS (`index.css`)
- Twinkling stars animation
- Floating hearts animation
- Smooth scrollbar styling
- Base styles

## Build System

### Vite
- **Development**: Fast HMR (Hot Module Replacement)
- **Production**: Optimized bundles
- **Port**: 3000 (configurable in vite.config.js)

### Dependencies
```json
{
  "react": "^18.2.0",           // UI framework
  "react-dom": "^18.2.0",       // React DOM renderer
  "framer-motion": "^10.16.4",  // Animation library
  "vite": "^5.0.2",             // Build tool
  "tailwindcss": "^3.3.5",      // CSS framework
  "autoprefixer": "^10.4.16",   // CSS vendor prefixes
  "postcss": "^8.4.31"          // CSS processing
}
```

## Key Technologies

| Technology | Purpose | Why |
|------------|---------|-----|
| React 18 | UI Framework | Component-based, efficient updates |
| Framer Motion | Animations | Smooth, production-ready animations |
| TailwindCSS | Styling | Rapid development, consistent design |
| Vite | Build Tool | Lightning-fast dev server & builds |
| HTML5 Canvas | Fireworks | High-performance particle rendering |

## Performance Optimization

✅ **Canvas** for fireworks (60fps)  
✅ **GPU-accelerated** CSS animations  
✅ **Framer Motion** for optimized React animations  
✅ **Automatic cleanup** of particles  
✅ **Lazy loading** ready  
✅ **Responsive images**  

## File Sizes (Approximate)

- **App.jsx**: ~2KB
- **Fireworks.jsx**: ~4KB (most complex component)
- **PhotoSlideshow.jsx**: ~3KB
- **Other components**: ~1-2KB each
- **Total bundle (production)**: ~150KB (minified + gzipped)

## Browser Compatibility

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  
✅ Mobile browsers (iOS Safari, Chrome Mobile)  

## Next Steps

1. ✅ Dependencies installed
2. ✅ Photos configured
3. ⏳ Running dev server
4. 🎵 Add music (optional)
5. 💝 Personalize footer
6. 🚀 Deploy to production

---

**Made with ❤️ for someone special**

