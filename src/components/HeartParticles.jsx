import React, { useEffect, useState } from 'react'

/**
 * HeartParticles Component
 * Creates floating heart particles that rise from bottom to top
 */
const HeartParticles = () => {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    // Generate heart particles periodically
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        animationDuration: Math.random() * 4 + 6,
        animationDelay: 0,
      }
      
      setHearts((prev) => [...prev.slice(-10), newHeart]) // Keep last 10 hearts
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-5">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-particle"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.animationDelay}s`,
          }}
        >
          💖
        </div>
      ))}
    </div>
  )
}

export default HeartParticles

