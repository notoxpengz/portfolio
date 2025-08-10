'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AJLogo } from './AJLogo'
import StickyCTA from './StickyCTA'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-green-500/10 animate-pulse-glow" />
        {/* Animated rhombus background pattern */}
        <div className="grid grid-cols-8 gap-4 h-full p-8 transform rotate-45">
          {Array.from({ length: 32 }).map((_, i) => (
            <div 
              key={i}
              className={`w-12 h-12 border border-purple-500/20 transform rotate-45 animate-float ${
                i % 3 === 0 ? 'animate-pulse-glow' : ''
              }`}
              style={{ 
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${3 + (i % 3)}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <AJLogo className="w-24 h-24 text-purple-400 glow-purple" />
        </div>
        
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
          <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            Advisor
          </span>
          <span className="text-white mx-4">·</span>
          <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
            Investor
          </span>
          <span className="text-white mx-4">·</span>
          <span className="bg-gradient-to-r from-green-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Marketer
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          <span className="text-cyan-400 font-semibold">All things Web3 & AI</span>
          <br className="hidden md:block" />
          Building the future, one innovation at a time
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="#booking" className="btn-hover-glow inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule a Call
          </Link>
          
          <Link href="#inquire" className="btn-hover-glow inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Inquire
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <StickyCTA />
    </section>
  )
}

export default Hero
