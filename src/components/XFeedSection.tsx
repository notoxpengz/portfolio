'use client';

import React from 'react';

interface XFeedSectionProps {
  className?: string;
}

const XFeedSection: React.FC<XFeedSectionProps> = ({ className = '' }) => {
  const xHandle = process.env.NEXT_PUBLIC_X_HANDLE;

  if (!xHandle) {
    return (
      <section className={`py-20 bg-gray-50 dark:bg-gray-900 ${className}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Updates
          </h2>
          <p className="text-red-600 dark:text-red-400">
            X handle not configured. Please set NEXT_PUBLIC_X_HANDLE in your environment variables.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Updates
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Follow my journey and stay updated with the latest insights, projects, and thoughts.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🐦</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    @{xHandle}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Latest posts and updates
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              {/* X Timeline Embed */}
              <div className="w-full" style={{ minHeight: '600px' }}>
                <a 
                  className="twitter-timeline" 
                  data-height="600" 
                  data-theme="light" 
                  data-chrome="nofooter noborders transparent" 
                  href={`https://twitter.com/${xHandle}?ref_src=twsrc%5Etfw`}
                >
                  Loading posts from @{xHandle}...
                </a>
                {/* Twitter Widget Script */}
                <script 
                  async 
                  src="https://platform.twitter.com/widgets.js" 
                  charSet="utf-8"
                ></script>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href={`https://twitter.com/${xHandle}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">🐦</span>
            Follow @{xHandle}
          </a>
        </div>
      </div>
    </section>
  );
};

export default XFeedSection;
