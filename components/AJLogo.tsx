import React from 'react'

interface AJLogoProps {
  className?: string
}

export const AJLogo: React.FC<AJLogoProps> = ({ className = '' }) => {
  return (
    <svg
      className={`animate-pulse-glow ${className}`}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gaming-style diamond/rhombus frame */}
      <defs>
        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8A2BE2" />
          <stop offset="50%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#7CFF50" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/> 
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer diamond frame */}
      <polygon 
        points="50,5 85,35 85,65 50,95 15,65 15,35" 
        fill="none" 
        stroke="url(#neonGradient)" 
        strokeWidth="2"
        filter="url(#glow)"
      />
      
      {/* Inner diamond */}
      <polygon 
        points="50,15 75,40 75,60 50,85 25,60 25,40" 
        fill="rgba(138, 43, 226, 0.1)" 
        stroke="url(#neonGradient)" 
        strokeWidth="1"
      />
      
      {/* Letter A */}
      <path 
        d="M35 65 L42 45 L48 45 L55 65 M38 58 L52 58" 
        fill="none" 
        stroke="url(#neonGradient)" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        filter="url(#glow)"
      />
      
      {/* Letter J */}
      <path 
        d="M60 35 L60 58 Q60 65 53 65 Q46 65 46 58" 
        fill="none" 
        stroke="url(#neonGradient)" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        filter="url(#glow)"
      />
      
      {/* Top accent dots */}
      <circle cx="45" cy="25" r="1.5" fill="url(#neonGradient)" filter="url(#glow)" />
      <circle cx="55" cy="25" r="1.5" fill="url(#neonGradient)" filter="url(#glow)" />
    </svg>
  )
}
