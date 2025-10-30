"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "@/components/ui/navigation";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  // Get email from URL params on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get('email');
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
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
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, reason }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      <Navigation />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Join the Waitlist
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Be among the first to experience Adomi - Africa's trusted digital gateway for travelers and investors.
            </p>
          </div>

          {/* Glassmorphism Form Container */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/15 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl hover:bg-white/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-3xl"></div>
              
              <form onSubmit={handleSubmit} className="relative space-y-6">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder:text-white/70 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white/25"
                    required
                  />
                </div>

                {/* Reason Dropdown */}
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-white/90 mb-2">
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

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-6 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] backdrop-blur-md border border-blue-500/30"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Joining...</span>
                    </div>
                  ) : (
                    "Join Waitlist"
                  )}
                </button>

                {/* Message Display */}
                {message && (
                  <div
                    className={`p-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                      messageType === "success"
                        ? "bg-green-500/20 text-green-100 border border-green-400/30"
                        : "bg-red-500/20 text-red-100 border border-red-400/30"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </form>

              {/* Back to Home Link */}
              <div className="relative mt-8 text-center">
                <Link
                  href="/"
                  className="text-white/80 hover:text-white font-medium transition-colors duration-300"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="text-white font-semibold mb-2">Global Access</h3>
                <p className="text-white/70 text-sm">Connect with verified opportunities across Ghana</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-white font-semibold mb-2">Trusted Network</h3>
                <p className="text-white/70 text-sm">Verified connections you can trust</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="text-white font-semibold mb-2">Early Access</h3>
                <p className="text-white/70 text-sm">Be first to explore new opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
