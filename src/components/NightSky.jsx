import React, { useEffect, useState } from 'react'

/**
 * NightSky Component
 * Creates a starry night sky background with twinkling stars
 */
const NightSky = () => {
  const [stars, setStars] = useState([])

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = []
      const starCount = 150
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 2 + 1,
          animationDelay: Math.random() * 3,
          animationDuration: Math.random() * 3 + 2,
        })
      }
      
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
    </div>
  )
}

export default NightSky

