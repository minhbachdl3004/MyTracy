import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Fireworks from './components/Fireworks'
import PhotoSlideshow from './components/PhotoSlideshow'
import MusicPlayer from './components/MusicPlayer'
import NightSky from './components/NightSky'
import HeartParticles from './components/HeartParticles'

function App() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show content after a brief delay for dramatic entrance
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-night-sky via-[#0f1535] to-night-sky">
      {/* Night Sky Background with Stars */}
      <NightSky />
      
      {/* Fireworks Animation */}
      <Fireworks />
      
      {/* Heart Particles */}
      <HeartParticles />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 overflow-visible">
        {showContent && (
          <>
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-center mb-12 md:mb-16 w-full px-8"
              style={{ overflow: 'visible' }}
            >
              <div className="flex flex-col items-center gap-4 sm:gap-6 title-glow px-6 py-12" style={{ overflow: 'visible' }}>
                {/* Line 1: Happy Birthday */}
                <h1 
                  className="font-signature text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #ff69b4, #ffd700, #ff69b4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    padding: '20px 40px',
                    display: 'block',
                    lineHeight: '1.4',
                    overflow: 'visible',
                  }}
                >
                  Happy Birthday
                </h1>
                
                {/* Line 2: Tracy */}
                <motion.h2
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 1, ease: "backOut" }}
                  className="font-signature text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #ffd700, #ff69b4, #ffd700)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    padding: '20px 40px',
                    display: 'block',
                    lineHeight: '1.4',
                    overflow: 'visible',
                  }}
                >
                  Tracy 💖
                </motion.h2>
              </div>
            </motion.div>

            {/* Flying Photo Balloons */}
            <div className="fixed inset-0 pointer-events-none z-5">
              <PhotoSlideshow />
            </div>

            {/* Music Player */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mb-8"
            >
              <MusicPlayer />
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1.5 }}
              className="text-center text-romantic-pink text-xs sm:text-sm md:text-base mt-8 px-4"
            >
              <p className="font-light italic">
                Made with love by Henry 💌
              </p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}

export default App

