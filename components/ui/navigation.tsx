"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/community", label: "Community" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`bg-white shadow-sm border-b ${className}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
            Adomi App
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`transition-colors font-medium ${
                    isActive 
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1" 
                      : "text-blue-900 hover:text-blue-700"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-blue-900 hover:text-blue-700 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
