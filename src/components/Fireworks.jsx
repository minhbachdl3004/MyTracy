import React, { useEffect, useRef } from 'react'

/**
 * Fireworks Component
 * Creates realistic fireworks animation using HTML5 Canvas
 * Particles explode in circular patterns with gravity and fade effects
 */
const Fireworks = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let fireworks = []
    let particles = []

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Firework class - rocket that shoots up
    class Firework {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height
        this.targetY = Math.random() * canvas.height * 0.4 + 50
        this.speed = Math.random() * 3 + 4
        this.angle = Math.PI / 2 // Shooting straight up
        this.brightness = Math.random() * 30 + 50
        this.color = this.randomColor()
      }

      randomColor() {
        const colors = [
          '#ff69b4', // Pink
          '#ffd700', // Gold
          '#ff1493', // Deep pink
          '#ffb6c1', // Light pink
          '#ffa500', // Orange
          '#ff69b4', // Romantic pink
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.y -= this.speed
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      hasExploded() {
        return this.y <= this.targetY
      }
    }

    // Particle class - explosion particles
    class Particle {
      constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
        
        // Random explosion angle
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 5 + 2
        this.velocityX = Math.cos(angle) * speed
        this.velocityY = Math.sin(angle) * speed
        
        this.alpha = 1
        this.decay = Math.random() * 0.015 + 0.015
        this.gravity = 0.05
        this.size = Math.random() * 2 + 1
      }

      update() {
        this.velocityY += this.gravity
        this.x += this.velocityX
        this.y += this.velocityY
        this.alpha -= this.decay
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        
        // Add glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = this.color
        ctx.fill()
        ctx.restore()
      }

      isDead() {
        return this.alpha <= 0
      }
    }

    // Create explosion particles
    const createExplosion = (x, y, color) => {
      const particleCount = 100
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(x, y, color))
      }
    }

    // Animation loop
    const animate = () => {
      // Create trail effect by not completely clearing canvas
      ctx.fillStyle = 'rgba(10, 14, 39, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Randomly create new fireworks
      if (Math.random() < 0.03) {
        fireworks.push(new Firework())
      }

      // Update and draw fireworks
      for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update()
        fireworks[i].draw()

        if (fireworks[i].hasExploded()) {
          createExplosion(fireworks[i].x, fireworks[i].y, fireworks[i].color)
          fireworks.splice(i, 1)
        }
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update()
        particles[i].draw()

        if (particles[i].isDead()) {
          particles.splice(i, 1)
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  )
}

export default Fireworks

