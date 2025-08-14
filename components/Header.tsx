'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2 } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.15)
  const [progress, setProgress] = useState(0)
  const [showToast, setShowToast] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  const navItems = [
    { label: 'Propósito', href: '#proposito' },
    { label: 'Convidado', href: '#convidado' },
    { label: 'Programação', href: '#programacao' },
    { label: 'Inscrição', href: '#inscricao' },
    { label: 'Local', href: '#local' },
    { label: 'FAQ', href: '#faq' },
  ]

  useEffect(() => {
    if (audioRef.current) {
      // Configuração inicial do áudio
      audioRef.current.volume = 0
      audioRef.current.muted = true
      
      // Estratégia principal: tocar mutado primeiro
      const tryAutoplay = async () => {
        try {
          // Tenta tocar mutado (geralmente permitido)
          await audioRef.current?.play()
          setIsPlaying(true)
          
          // Após sucesso, gradualmente aumenta o volume
          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.muted = false
              setIsMuted(false)
              
              // Fade in do volume
              let currentVolume = 0
              const fadeInterval = setInterval(() => {
                if (currentVolume < volume) {
                  currentVolume += 0.01
                  if (audioRef.current) audioRef.current.volume = Math.min(currentVolume, volume)
                } else {
                  clearInterval(fadeInterval)
                }
              }, 50)
            }
          }, 100)
        } catch (err) {
          // Se falhar mesmo mutado, mostra toast
          setShowToast(true)
          setTimeout(() => setShowToast(false), 5000)
        }
      }
      
      // Tenta imediatamente
      tryAutoplay()
      
      // Estratégia de fallback: tocar ao primeiro clique
      const playOnFirstInteraction = async () => {
        try {
          if (audioRef.current && !isPlaying) {
            audioRef.current.muted = false
            audioRef.current.volume = volume
            setIsMuted(false)
            await audioRef.current.play()
            setIsPlaying(true)
            setShowToast(false)
          }
        } catch (err) {
          console.log('Autoplay blocked')
        }
        // Remove os listeners após a primeira interação
        document.removeEventListener('click', playOnFirstInteraction)
        document.removeEventListener('touchstart', playOnFirstInteraction)
      }
      
      // Adiciona listeners para capturar primeira interação
      document.addEventListener('click', playOnFirstInteraction)
      document.addEventListener('touchstart', playOnFirstInteraction)
      
      // Cleanup
      return () => {
        document.removeEventListener('click', playOnFirstInteraction)
        document.removeEventListener('touchstart', playOnFirstInteraction)
      }
    }
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }

    audio.addEventListener('timeupdate', updateProgress)
    return () => audio.removeEventListener('timeupdate', updateProgress)
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
        if (showToast) setShowToast(false)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = x / rect.width
    audio.currentTime = percentage * audio.duration
  }

  return (
    <>
      <header className={`fixed top-0 w-full z-50 glass transition-all duration-300 ${isPlaying ? 'animate-pulse' : ''}`}>
        <div className="section-padding py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Image
                src="/logo-igreja.png"
                alt="Igreja Bethshalom"
                width={120}
                height={40}
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              
              <nav className="hidden md:flex gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm hover:text-primary-light transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="p-2 hover:bg-white/10 rounded-full transition-all"
                aria-label={isPlaying ? 'Pausar' : 'Tocar'}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>

              <div 
                className="w-32 h-1 bg-white/20 rounded-full cursor-pointer relative overflow-hidden"
                onClick={handleProgressClick}
              >
                <div 
                  className="absolute h-full bg-primary transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center gap-2">
                <Volume2 size={16} />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => {
                    const newVolume = parseFloat(e.target.value)
                    setVolume(newVolume)
                    if (audioRef.current) {
                      audioRef.current.volume = newVolume
                    }
                  }}
                  className="w-16 h-1 accent-primary"
                />
              </div>
            </div>
          </div>
        </div>

        <audio
          ref={audioRef}
          src="/audio/tema.mp3"
          loop
          muted={isMuted}
          playsInline
          onEnded={() => setIsPlaying(false)}
        />
      </header>

      {showToast && (
        <div className="fixed top-20 right-4 z-50 glass p-4 rounded-lg animate-fade-in">
          <p className="text-sm">🎵 Toque para ouvir a trilha do congresso</p>
        </div>
      )}
    </>
  )
}