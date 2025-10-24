import React from 'react'
import { motion } from 'framer-motion'

/**
 * PhotoSlideshow Component (Vintage Film Photos!)
 * Displays all 8 photos as vintage film frames floating upward
 * Each photo has classic film borders and retro styling
 */
const PhotoSlideshow = () => {
  // Tracy's photos from the public folder with vintage dates and wishes
  const photos = [
    {
      id: 1,
      url: '/photos/angel.png',
      alt: 'Angel 💕',
      date: '2024',
      caption: 'My Angel',
      wish: 'The world feels softer when you smile.',
      delay: 0,
      leftPosition: 15, // Random positions across screen
    },
    {
      id: 2,
      url: '/photos/angelllllllll.png',
      alt: 'My Angel 💖',
      date: '2024',
      caption: 'Forever',
      wish: 'You are my favorite calm after every storm.',
      delay: 5,
      leftPosition: 70,
    },
    {
      id: 3,
      url: '/photos/nàng thơ.png',
      alt: 'Nàng Thơ ✨',
      date: '2024',
      caption: 'Nàng Thơ',
      wish: 'If beauty were a moment, it would be you.',
      delay: 10,
      leftPosition: 35,
    },
    {
      id: 4,
      url: '/photos/love you so muchhhhhhhhh.png',
      alt: 'Love You So Much 💗',
      date: '2024',
      caption: 'Love You',
      wish: 'Every glance from you feels like home.',
      delay: 15,
      leftPosition: 80,
    },
    {
      id: 5,
      url: '/photos/loveeeeeeee you.png',
      alt: 'Loveeee You 💝',
      date: '2024',
      caption: 'Always',
      wish: 'You\'ve grown with grace, light, and quiet strength.',
      delay: 20,
      leftPosition: 10,
    },
    {
      id: 6,
      url: '/photos/láo cá chó.png',
      alt: 'Láo Cá Chó 😊',
      date: '2024',
      caption: 'Sweet',
      wish: 'In your laughter, I find my peace.',
      delay: 25,
      leftPosition: 55,
    },
    {
      id: 7,
      url: '/photos/ỏooooooooooooooo.png',
      alt: 'Ỏoooooooo 🥰',
      date: '2024',
      caption: 'Beautiful',
      wish: 'Time moves gently when you\'re near.',
      delay: 30,
      leftPosition: 25,
    },
    {
      id: 8,
      url: '/photos/tracyyyyyyyyyyy.png',
      alt: 'Tracy 💖',
      date: '2024',
      caption: 'Tracy ♥',
      wish: 'Happy birthday, my love — to all the days we\'ll share from here on. 💖',
      delay: 35,
      leftPosition: 65,
    },
  ]

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* All Vintage Film Photos Flying from Bottom to Top */}
      {photos.map((photo, index) => {
        return (
          <motion.div
            key={photo.id}
            className="absolute"
            style={{
              left: `${photo.leftPosition}%`,
            }}
            initial={{ 
              y: '120vh',
              opacity: 0,
              rotate: Math.random() * 20 - 10,
            }}
            animate={{
              y: '-40vh', // Fly from bottom to top
              opacity: [0, 1, 1, 1, 0.8, 0],
              rotate: Math.random() * 30 - 15,
            }}
            transition={{
              duration: 18 + index * 2, // Each photo at different speed
              delay: photo.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Gentle Rotation & Sway */}
            <motion.div
              animate={{
                x: [0, 10, -10, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 5 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
            {/* Vintage Film Photo Frame */}
            <div 
              className="relative bg-white p-2 shadow-2xl"
              style={{
                width: '180px',
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.4))',
              }}
            >
                {/* Film Border Top - Sprocket Holes */}
                <div className="absolute -top-1 left-0 right-0 h-2 bg-black flex justify-around items-center px-1">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1 bg-white/20 rounded-sm" />
                  ))}
                </div>

                {/* Main Photo Area */}
                <div className="relative bg-gray-100 overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  {/* Photo */}
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'sepia(0.15) contrast(1.1) saturate(0.95)',
                    }}
                  />
                  
                  {/* Vintage Film Grain Overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
                      mixBlendMode: 'multiply',
                    }}
                  />

                  {/* Film Frame Number (top right) */}
                  <div className="absolute top-1 right-1 text-[8px] font-mono text-red-600 opacity-70">
                    #{photo.id}A
                  </div>
                </div>

                {/* Bottom Caption Area (like Polaroid) */}
                <div className="mt-2 pb-1 px-1">
                  <p className="text-xs text-gray-700 text-center font-signature">
                    {photo.caption}
                  </p>
                  <p className="text-[8px] text-gray-400 text-center font-mono mt-0.5">
                    {photo.date}
                  </p>
                </div>

                {/* Wish Text - Appears on the side */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2, duration: 1 }}
                  className="absolute -right-48 top-1/2 transform -translate-y-1/2 w-40 bg-white/95 rounded-lg p-3 shadow-lg"
                  style={{
                    zIndex: 20,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <p className="text-xs text-gray-800 text-center font-signature leading-relaxed">
                    "{photo.wish}"
                  </p>
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white/95" />
                </motion.div>

                {/* Film Border Bottom - Sprocket Holes */}
                <div className="absolute -bottom-1 left-0 right-0 h-2 bg-black flex justify-around items-center px-1">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1 bg-white/20 rounded-sm" />
                  ))}
                </div>

                {/* Vintage Tape Effect (random corners) */}
                {index % 3 === 0 && (
                  <div 
                    className="absolute -top-2 right-4 w-12 h-4 bg-yellow-100/60 transform rotate-45"
                    style={{
                      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    }}
                  />
                )}

                {/* Worn Edges Effect */}
                <div className="absolute inset-0 border border-gray-200/50 pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  )
}

export default PhotoSlideshow

