'use client'

import Link from 'next/link'

const StickyCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Link 
        href="#booking" 
        className="btn-hover-glow inline-flex items-center px-4 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 text-sm"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Schedule Call
      </Link>
      
      <Link 
        href="/inquire" 
        className="btn-hover-glow inline-flex items-center px-4 py-3 bg-gradient-to-r from-green-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 text-sm"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Inquire
      </Link>
    </div>
  )
}

export default StickyCTA
