import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

/**
 * MusicPlayer Component
 * Provides a button to play/pause romantic background music
 * Music auto-plays when user clicks the button
 */
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  // KHÔNG BUÔNG - Hngle ft. Ari (Tracy's favorite song!)
  const musicUrl = '/Iframe Hngle - KHÔNG BUÔNG ft. Ari _ Official Music Video [9UcQ7ddVjoc].mp3'

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={musicUrl}
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      />

      {/* Play Music Button */}
      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white text-base sm:text-lg
          transition-all duration-300 shadow-lg
          ${
            isPlaying
              ? 'bg-gradient-to-r from-soft-gold to-romantic-pink shadow-romantic-pink/50 animate-pulse'
              : 'bg-gradient-to-r from-romantic-pink to-soft-gold shadow-soft-gold/50'
          }
          hover:shadow-xl hover:shadow-romantic-pink/70
          flex items-center gap-2 sm:gap-3
        `}
      >
        <span className="text-xl sm:text-2xl">{isPlaying ? '⏸️' : '🎵'}</span>
        <span>{isPlaying ? 'Pause Music' : 'Play Music'}</span>
      </motion.button>

      {/* Music indicator */}
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex gap-1"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-romantic-pink rounded-full"
              animate={{
                height: [10, 25, 10],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      )}

      <p className="text-white/60 text-xs sm:text-sm text-center max-w-md px-4">
        {isPlaying
          ? '🎶 Enjoying the music together...'
          : '🎵 Click to play romantic music'}
      </p>
    </div>
  )
}

export default MusicPlayer

