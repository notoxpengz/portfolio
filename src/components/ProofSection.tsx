'use client';

import React from 'react';

interface ProofSectionProps {
  className?: string;
}

const ProofSection: React.FC<ProofSectionProps> = ({ className = '' }) => {
  const proofItems = [
    {
      title: 'Client Testimonials',
      description: '100+ satisfied clients with 5-star reviews',
      icon: '⭐',
      metric: '100+',
      label: 'Happy Clients'
    },
    {
      title: 'Project Success Rate',
      description: 'Delivered on time and within budget',
      icon: '✅',
      metric: '98%',
      label: 'Success Rate'
    },
    {
      title: 'Years of Experience',
      description: 'Building robust digital solutions',
      icon: '🚀',
      metric: '5+',
      label: 'Years Experience'
    },
    {
      title: 'Technologies Mastered',
      description: 'Modern frameworks and tools',
      icon: '⚡',
      metric: '20+',
      label: 'Technologies'
    }
  ];

  return (
    <section className={`py-20 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's the proof of my commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {proofItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group hover:scale-105 transform transition-transform"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {item.metric}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.label}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join My Success Stories?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's work together to bring your vision to life with proven expertise and dedication.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
