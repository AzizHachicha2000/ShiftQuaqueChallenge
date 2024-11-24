import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Your mental health</span>
                <span className="block text-indigo-600">matters to us</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Join thousands of students who've found peace, support, and growth through our platform. Start your journey to better mental health today.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Get Started Free
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Try Premium
                  </button>
                </div>
              </div>
            </div>
          </main>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Safe Space</h3>
              <p className="mt-2 text-base text-gray-500 text-center">Your privacy and security are our top priorities</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Peer Support</h3>
              <p className="mt-2 text-base text-gray-500 text-center">Connect with others who understand your journey</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Professional Help</h3>
              <p className="mt-2 text-base text-gray-500 text-center">Access to licensed therapists and counselors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}