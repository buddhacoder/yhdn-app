import { useState, useRef } from 'react'
import { Music, Pause } from 'lucide-react'

export default function FloatingAudio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
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
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 100, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      
      {/* Editorial Label */}
      <div style={{ 
        background: 'var(--color-navy)', color: 'var(--color-gold)', 
        padding: '0.4rem 0.75rem', borderRadius: 2, 
        fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
        boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
        border: '1px solid var(--color-gold)',
        borderBottomWidth: 2, borderRightWidth: 2,
        opacity: isPlaying ? 1 : 0,
        transform: isPlaying ? 'translateY(0)' : 'translateY(10px)',
        pointerEvents: 'none',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        Anthem Playing
      </div>
      
      {/* Brutalist Circular FAB */}
      <button 
        onClick={togglePlay}
        className="btn-editorial"
        style={{ 
          width: 56, height: 56, borderRadius: '50%', padding: 0, 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: isPlaying ? 'var(--color-haiti-red)' : 'var(--color-ivory)',
          color: isPlaying ? 'white' : 'var(--color-navy)',
          boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
          border: '2px solid var(--color-navy)',
          transition: 'all 0.2s',
          cursor: 'pointer'
        }}
        aria-label="Toggle YHDN Anthem"
      >
        {isPlaying ? <Pause size={24} strokeWidth={2.5} /> : <Music size={24} strokeWidth={2.5} />}
      </button>

      <audio ref={audioRef} loop>
        <source src="/nou-leve-ansanm.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
