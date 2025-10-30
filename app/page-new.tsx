"use client";

import React, { useState, useRef } from "react";
import HeroSection from "@/components/ui/hero-section-2";
import { VerificationStep, FeatureCard, PersonaCard, WaitlistForm } from "@/components/ui/landing-components";
import { AlertCircle, FileCheck, Shield, Users, BadgeCheck, Building2, Phone, Calendar } from "lucide-react";

export default function Home() {
  const [waitlistCount] = useState(1247); // This would come from your API in reality
  const waitlistRef = useRef<HTMLElement>(null);

  const handleWaitlistSubmit = async (email: string, reason?: string) => {
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

      console.log('Successfully joined waitlist:', data);
      // The success message will be handled by the component
    } catch (error) {
      console.error('Waitlist signup error:', error);
      throw error; // Re-throw so the component can handle the error display
    }
  };

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen antialiased">
      {/* Hero Section */}
      <section className="min-h-screen w-screen overflow-hidden text-white relative">
        <HeroSection
          backgroundImage="/ghana-landscape.jpg"
          logoText="Adomi App"
          navLinks={[
            { href: "/explore", label: "Explore" },
            { href: "/community", label: "Community" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ]}
          avatarSrcList={[
            "https://placehold.co/32x32/a9a9a9/ffffff?text=U",
            "https://placehold.co/32x32/d3d3d3/ffffff?text=U",
            "https://placehold.co/32x32/808080/ffffff?text=U",
          ]}
          userCount={waitlistCount}
          title="Travel, Discover and Invest in Ghana"
          description="Building Africa's trusted digital gateway, starting with Ghana, empowering travelers and investors through verified trust and connections."
          placeholder="Enter Email ID"
          ctaText="Join Waitlist"
          onSubmit={handleWaitlistSubmit}
          footerVersion=""
        />
      </section>

      {/* The Problem Section */}
      <section className="py-32 md:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <AlertCircle className="w-12 h-12 mx-auto text-gray-400" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900">We Know the Struggle</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              You Google "lawyer in Accra" and get overwhelmed. You ask for recommendations in WhatsApp groups 
              and get ten different answers. You call a government office and the number doesn't work. 
              You send money to someone and they disappear. We've all been there. It's exhausting.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution - Verification Process */}
      <section className="py-32 md:py-40 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900">How Adomi Works</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
              We do the homework so you don't have to
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            <VerificationStep
              number="1"
              icon={<FileCheck className="w-8 h-8" />}
              title="They Show Us Proof"
              description="Businesses share their registration papers and licenses with us"
            />
            <VerificationStep
              number="2"
              icon={<Shield className="w-8 h-8" />}
              title="We Check Everything"
              description="Our team confirms it's all legit - no shortcuts"
            />
            <VerificationStep
              number="3"
              icon={<Users className="w-8 h-8" />}
              title="Real People Review"
              description="Other users share their honest experiences"
            />
            <VerificationStep
              number="4"
              icon={<BadgeCheck className="w-8 h-8" />}
              title="They Get the Badge"
              description="Only the real ones get our verified checkmark"
            />
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-32 md:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900">What You'll Find on Adomi</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
              The essentials, all in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
            <FeatureCard
              icon={<Building2 className="w-6 h-6" />}
              title="Trusted Businesses"
              description="Lawyers, real estate agents, contractors, event planners - all verified. No more wondering if they're legit."
            />
            <FeatureCard
              icon={<Phone className="w-6 h-6" />}
              title="Government & Embassy Info"
              description="Actually working phone numbers and addresses. Updated regularly so you're not calling dead lines."
            />
            <FeatureCard
              icon={<Calendar className="w-6 h-6" />}
              title="Events & Properties"
              description="From house hunting to networking events - find opportunities from sources you can actually trust."
            />
          </div>
        </div>
      </section>

      {/* Targeted Value Props */}
      <section className="py-32 md:py-40 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900">Made for People Like You</h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Whether you're here, there, or coming back home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
            <PersonaCard
              name="James"
              role="Investing from Abroad"
              quote="I'm tired of sending money and crossing my fingers. I need to know who I'm working with."
              benefit="✓ Find verified professionals before you wire any money"
            />
            <PersonaCard
              name="Sarah"
              role="Returning to Ghana"
              quote="Moving back home shouldn't feel like navigating a maze blindfolded."
              benefit="✓ Everything you need to settle in, all verified and ready"
            />
            <PersonaCard
              name="Akosua"
              role="Local Business Owner"
              quote="I run a real business, but people are scared to trust anyone. I want to prove I'm legit."
              benefit="✓ Stand out with a verified badge that shows you're the real deal"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 md:py-40 bg-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center space-y-12">
          <div className="space-y-6">
            <p className="text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight">{waitlistCount.toLocaleString()}+</p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light">People Are Waiting</p>
          </div>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Join thousands who are ready to stop guessing and start trusting. 
            Be among the first to access Adomi when we launch.
          </p>
          <button 
            onClick={scrollToWaitlist}
            className="mt-8 bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300"
          >
            Join the Waitlist Now
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={waitlistRef} className="py-32 md:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900">
              Get Early Access
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Be first in line when Adomi goes live. No spam, just updates.
            </p>
            <WaitlistForm onSubmit={handleWaitlistSubmit} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center gap-8">
            <div className="text-2xl font-bold text-gray-900">Adomi</div>
            <p className="text-sm text-gray-600 text-center font-light">
              Bridging hearts, homes and opportunities
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-6 items-center">
              <a 
                href="https://youtube.com/@TheAdomiApp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/TheAdomiApp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com/@TheAdomiApp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/TheAdomiApp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            <div className="flex gap-8 text-sm text-gray-500 font-light">
              <a href="#" className="hover:text-gray-700 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Contact</a>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-12 font-light">
            © 2025 Adomi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
