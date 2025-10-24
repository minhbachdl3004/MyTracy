import React from 'react'
import { motion } from 'framer-motion'

/**
 * PhotoEffects Component
 * Beautiful balloon and particle effects for photos
 * Creates a festive birthday atmosphere
 */
const PhotoEffects = () => {
  // Floating Balloons
  const balloons = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: (i * 12.5) + Math.random() * 5,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    color: ['#ff69b4', '#ffd700', '#ff1493', '#ffb6c1', '#ffa500'][Math.floor(Math.random() * 5)],
  }))

  // Gentle falling particles (like magical dust)
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3,
    size: Math.random() * 4 + 2,
  }))

  return (
    <>
      {/* Floating Balloons */}
      {balloons.map((balloon) => (
        <motion.div
          key={`balloon-${balloon.id}`}
          className="absolute pointer-events-none z-10"
          style={{
            left: `${balloon.left}%`,
            bottom: '-40px',
          }}
          animate={{
            y: [0, -520],
            x: [0, Math.sin(balloon.id) * 25],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: balloon.duration,
            repeat: Infinity,
            delay: balloon.delay,
            ease: "easeInOut",
          }}
        >
          {/* Balloon with shadow */}
          <div 
            className="relative"
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
            }}
          >
            {/* Balloon body */}
            <div
              className="w-7 h-9 sm:w-8 sm:h-10 rounded-full relative"
              style={{
                background: `linear-gradient(135deg, ${balloon.color} 0%, ${balloon.color}cc 100%)`,
              }}
            >
              {/* Shine effect on balloon */}
              <div 
                className="absolute top-1.5 left-1.5 w-2.5 h-2.5 bg-white/50 rounded-full blur-[1px]"
              />
              {/* Secondary shine */}
              <div 
                className="absolute top-3 left-1 w-1.5 h-1.5 bg-white/30 rounded-full"
              />
            </div>
            {/* Balloon knot */}
            <div 
              className="absolute top-full left-1/2 w-2 h-1.5 rounded-full"
              style={{ 
                transform: 'translateX(-50%)',
                background: balloon.color,
                opacity: 0.8,
              }}
            />
            {/* Balloon string */}
            <motion.div 
              className="absolute top-full left-1/2 w-0.5 bg-white/40"
              style={{ 
                transform: 'translateX(-50%)',
                height: '32px',
              }}
              animate={{
                scaleX: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Magical Falling Particles (Shimmer/Rain) */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${particle.left}%`,
            top: '-20px',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.id % 2 === 0 ? '#ffd700' : '#ff69b4',
            boxShadow: `0 0 ${particle.size * 2}px ${particle.id % 2 === 0 ? '#ffd700' : '#ff69b4'}`,
          }}
          animate={{
            y: [0, 450],
            x: [0, Math.sin(particle.id) * 30],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Sparkling Stars (Subtle) */}
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute pointer-events-none"
          style={{
            left: `${20 + i * 15}%`,
            top: `${20 + Math.random() * 40}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            {/* Four-point star */}
            <div className="w-1 h-3 bg-soft-gold rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="w-3 h-1 bg-soft-gold rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </motion.div>
      ))}
    </>
  )
}

export default PhotoEffects

