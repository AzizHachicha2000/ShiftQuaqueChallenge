import React from 'react';
import { MessageSquare, Video, BookOpen, Activity, Lock, Award } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need for better mental health
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Free Features */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <MessageSquare className="h-8 w-8 text-indigo-600" />
                  <h3 className="ml-3 text-xl font-medium text-gray-900">AI Chat Support</h3>
                </div>
                <p className="mt-4 text-gray-500">24/7 access to our AI-powered mental health chatbot for immediate support</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <BookOpen className="h-8 w-8 text-indigo-600" />
                  <h3 className="ml-3 text-xl font-medium text-gray-900">Self-Help Library</h3>
                </div>
                <p className="mt-4 text-gray-500">Extensive collection of articles, guides, and resources for personal growth</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <Activity className="h-8 w-8 text-indigo-600" />
                  <h3 className="ml-3 text-xl font-medium text-gray-900">Mood Tracking</h3>
                </div>
                <p className="mt-4 text-gray-500">Track your emotional well-being with our intuitive mood tracking tools</p>
              </div>
            </div>

            {/* Premium Features */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <Video className="h-8 w-8 text-indigo-600" />
                  <h3 className="ml-3 text-xl font-medium text-gray-900">Video Therapy</h3>
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    Premium
                  </span>
                </div>
                <p className="mt-4 text-gray-500">One-on-one video sessions with licensed therapists</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <Lock className="h-8 w-8 text-indigo-600" />
                  <h3 className="ml-3 text-xl font-medium text-gray-900">Priority Support</h3>
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    Premium
                  </span>
                </div>
                <p className="mt-4 text-gray-500">24/7 priority access to mental health professionals</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-indigo-600" />
                  <h3 className="ml-3 text-xl font-medium text-gray-900">Wellness Plan</h3>
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    Premium
                  </span>
                </div>
                <p className="mt-4 text-gray-500">Personalized mental wellness plans and progress tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}