import React from 'react';
import { Phone, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Crisis Support */}
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-4">24/7 Crisis Support</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2" />
                <span>National Crisis Line: 988</span>
              </div>
              <p className="text-gray-400 text-sm">
                If you're in immediate danger, please call your local emergency services or 911
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:support@mindfulstudent.com" className="hover:text-indigo-400">
                  support@mindfulstudent.com
                </a>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-indigo-400">Student Support Guide</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">Mental Health Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by MindfulStudent
          </p>
        </div>
      </div>
    </footer>
  );
}