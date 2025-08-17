'use client'

import { useEffect, useState, useRef } from 'react'
import { ChevronDown, Fish } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  const skyY = useTransform(scrollY, [0, 500], [0, -100])
  const seaY = useTransform(scrollY, [0, 500], [0, -50])
  const boatY = useTransform(scrollY, [0, 500], [0, -30])
  const fishScale = useTransform(scrollY, [0, 500], [1, 0.8])

  useEffect(() => {
    const targetDate = new Date('2025-08-24T23:59:59')
    
    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }
    
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    
    return () => clearInterval(interval)
  }, [])

  const handleRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const ripple = document.createElement('div')
    const rect = e.currentTarget.getBoundingClientRect()
    const size = 150
    
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`
    ripple.className = 'absolute rounded-full bg-primary/30 animate-ping pointer-events-none'
    
    e.currentTarget.appendChild(ripple)
    setTimeout(() => ripple.remove(), 1000)
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 gradient-bg"
        style={{ y: skyY }}
      />
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        
        <motion.div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{ y: seaY }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/20 to-transparent opacity-50" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-30"
          style={{ y: boatY }}
        >
          <div className="w-32 h-16 bg-primary-dark/50 rounded-b-full" />
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-16 bg-primary-dark/50" />
        </motion.div>

        <motion.div
          className="absolute top-1/4 right-10 text-primary-light/20"
          style={{ scale: fishScale }}
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Fish size={120} />
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-10 text-primary-light/10"
          style={{ scale: fishScale }}
          animate={{ rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        >
          <Fish size={80} />
        </motion.div>

        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => {
            // Usando valores determinísticos baseados no índice para evitar hydration mismatch
            const seed = i * 7.13
            const left = ((seed * 17) % 100)
            const top = ((seed * 23) % 100)
            const width = ((seed % 4) + 2)
            const height = ((seed % 4) + 2)
            const delay = (seed % 5)
            const duration = ((seed % 10) + 10)
            
            return (
              <div
                key={i}
                className="absolute rounded-full bg-white/10 animate-float"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${width}px`,
                  height: `${height}px`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
              />
            )
          })}
        </div>

        <svg className="absolute inset-x-0 bottom-0 h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path
            d="M0,0 C300,100 900,20 1200,100 L1200,120 L0,120 Z"
            fill="url(#wave-gradient)"
            animate={{ d: ["M0,0 C300,100 900,20 1200,100 L1200,120 L0,120 Z", "M0,20 C300,80 900,0 1200,80 L1200,120 L0,120 Z"] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(103, 210, 255, 0.3)" />
              <stop offset="100%" stopColor="rgba(23, 107, 255, 0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 text-center section-padding py-24">
        <motion.p 
          className="text-sm md:text-base text-primary-light mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Congresso de Homens 2025 — Igreja Bethshalom Caruaru
        </motion.p>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-glow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          PESCADORES<br />DE HOMENS
        </motion.h1>
        
        <motion.blockquote 
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          "Venham, sigam-me, e eu os farei pescadores de homens."
          <cite className="block text-sm mt-2 text-primary-light">— Mateus 4:19</cite>
        </motion.blockquote>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xl font-semibold">03, 04 e 05 de Outubro de 2025</p>
          <span className="hidden md:block">•</span>
          <p className="text-lg">Igreja Bethshalom Caruaru</p>
        </motion.div>
        
        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          onClick={handleRipple}
        >
          <a
            href="https://lastlink.com/p/C600073D0/checkout-payment"
            className="btn-primary text-lg glow relative overflow-hidden"
          >
            Garantir minha inscrição — R$ 60 (1º lote)
            <ChevronDown className="animate-bounce" />
          </a>
        </motion.div>
        
        <motion.div 
          className="mt-8 flex justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-light">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-xs uppercase tracking-wider">{unit === 'days' ? 'dias' : unit === 'hours' ? 'horas' : unit === 'minutes' ? 'min' : 'seg'}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}