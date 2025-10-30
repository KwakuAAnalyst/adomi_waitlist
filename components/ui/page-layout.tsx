import { ReactNode } from "react";
import Navigation from "./navigation";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  gradient?: "blue" | "green" | "yellow" | "purple";
  className?: string;
}

const gradientClasses = {
  blue: "bg-gradient-to-b from-blue-50 to-white",
  green: "bg-gradient-to-b from-green-50 to-white", 
  yellow: "bg-gradient-to-b from-yellow-50 to-white",
  purple: "bg-gradient-to-b from-purple-50 to-white",
};

export default function PageLayout({ 
  children, 
  title, 
  description, 
  gradient = "blue",
  className = "" 
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen ${gradientClasses[gradient]} ${className}`}>
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Page Content */}
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Adomi App</h3>
              <p className="text-gray-600">
                Bridging hearts, homes, and opportunities between Ghana and the global diaspora.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/explore" className="block text-gray-600 hover:text-blue-600 transition-colors">Explore</a>
                <a href="/community" className="block text-gray-600 hover:text-blue-600 transition-colors">Community</a>
                <a href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">About</a>
                <a href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
              <div className="space-y-2">
                <p className="text-gray-600">info@theadomiapp.com</p>
                <p className="text-gray-600">+233 (0) 123 456 789</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">© 2025 Adomi App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
