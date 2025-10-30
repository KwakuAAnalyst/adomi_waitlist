"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

interface HeroSectionProps {
  backgroundImage: string;
  logoText?: string;
  navLinks?: NavLink[];
  avatarSrcList?: string[];
  userCount?: number;
  title?: string;
  description?: string;
  placeholder?: string;
  ctaText?: string;
  onSubmit?: (email: string, reason?: string) => Promise<void> | void;
  footerVersion?: string;
  onJoinClick?: () => void;
}

/**
 * HeroSection
 *
 * A reusable hero component with a full-bleed background,
 * header, main call-to-action, and footer.
 *
 * Props:
 * - backgroundImage (string): URL of the background image
 * - logoText (string): Logo or brand text
 * - navLinks (Array<{ href: string, label: string }>): Navigation items
 * - avatarSrcList (string[]): List of avatar image URLs
 * - userCount (number): Display count of joined users
 * - title (string): Headline text
 * - description (string): Sub-headline text
 * - placeholder (string): Input placeholder for the form
 * - ctaText (string): Button text for form submission
 * - onSubmit (function): Callback when form is submitted (receives email string)
 * - footerVersion (string): Footer version text
 */
export default function HeroSection({
  backgroundImage,
  logoText = "Brand",
  navLinks = [],
  avatarSrcList = [],
  userCount = 0,
  title = "",
  description = "",
  placeholder = "Enter email",
  ctaText = "Submit",
  onSubmit = () => {},
  footerVersion = "",
  onJoinClick,
}: HeroSectionProps) {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !reason || isLoading) return;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address");
      setMessageType("error");
      return;
    }

    if (!reason) {
      setMessage("Please select what brings you to Adomi");
      setMessageType("error");
      return;
    }

    setIsLoading(true);
    setMessage("");
    setMessageType("");

    try {
      if (onSubmit) {
        await onSubmit(email, reason);
      }
      setEmail("");
      setReason("");
      setMessage("Successfully joined the waitlist! We'll be in touch soon.");
      setMessageType("success");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <header className="absolute inset-x-0 top-0 p-6 md:p-8 z-20">
        <div className="container mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="Adomi Logo" 
                  className="h-10 w-auto drop-shadow-lg"
                />
              </div>
              <div className="flex items-center">
                <button
                  onClick={onJoinClick}
                  className="bg-blue-900 hover:bg-blue-800 border border-blue-700 rounded-full px-8 py-3 text-sm font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main
        className="w-full bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Parallax overlay for enhanced depth */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        
        <div className="container mx-auto h-screen flex items-center px-6 md:px-8 relative z-10 pt-24 md:pt-32">
          <div 
            className="w-full md:w-1/2 lg:w-2/5"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          >
            <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8 text-white text-center">
              <div>Travel.</div>
              <div>Discover.</div>
              <div>Invest.</div>
            </h1>

            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed drop-shadow-sm">
                Adomi App is your go-to app for verified businesses, authentic contacts, and trusted opportunities in Ghana.
              </h2>
              <p className="text-xl md:text-2xl font-light italic text-yellow-300 drop-shadow-lg">
                No more 'my brother knows a guy.'
              </p>
            </div>

                        <div className="w-full max-w-md relative group hero-form">
              <form
                className="space-y-4"
                onSubmit={handleSubmit}
                aria-label="Waitlist signup"
              >
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder:text-white/70 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white/25"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="reason" className="sr-only">
                    What brings you to Adomi?
                  </label>
                  <select
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white/25"
                    required
                  >
                    <option value="" className="bg-gray-800 text-white">Select what brings you to Adomi</option>
                    <option value="traveler" className="bg-gray-800 text-white">Visiting/Traveling</option>
                    <option value="investor" className="bg-gray-800 text-white">Investing in Ghana</option>
                    <option value="diaspora" className="bg-gray-800 text-white">Diaspora (Living Abroad)</option>
                    <option value="returning" className="bg-gray-800 text-white">Relocating to Ghana</option>
                    <option value="business" className="bg-gray-800 text-white">Business Owner</option>
                    <option value="local" className="bg-gray-800 text-white">Living in Ghana</option>
                    <option value="other" className="bg-gray-800 text-white">Just Curious</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !email || !reason}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center backdrop-blur-md border border-blue-500/30 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Joining...</span>
                    </div>
                  ) : (
                    ctaText
                  )}
                </button>
                
                <p className="text-center text-sm text-white/80 font-medium mt-3">
                  Join 200+ people already waiting
                </p>
              </form>
              
              {message && (
                <div className={`mt-3 p-3 rounded-md text-sm ${
                  messageType === "success" 
                    ? "bg-green-100 text-green-800 border border-green-300" 
                    : "bg-red-100 text-red-800 border border-red-300"
                }`}>
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}