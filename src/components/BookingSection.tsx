'use client';

import React from 'react';

interface BookingSectionProps {
  className?: string;
}

const BookingSection: React.FC<BookingSectionProps> = ({ className = '' }) => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  if (!calendlyUrl) {
    return (
      <section className={`py-20 bg-white dark:bg-gray-800 ${className}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Book a Consultation
          </h2>
          <p className="text-red-600 dark:text-red-400">
            Calendly URL not configured. Please set NEXT_PUBLIC_CALENDLY_URL in your environment variables.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 bg-white dark:bg-gray-800 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's schedule a free consultation to discuss your needs and how I can help bring your vision to life.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  What to Expect:
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Free 30-minute consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Project scope and timeline discussion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Technology recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>Custom proposal and pricing</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-inner">
                <iframe
                  src={calendlyUrl}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title="Schedule a consultation"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300">
            Can't find a suitable time? <a href="mailto:contact@yoursite.com" className="text-blue-600 dark:text-blue-400 hover:underline">Send me an email</a> and we'll find a time that works.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
