"use client";

import React from "react";
import HeroSection from "@/components/ui/hero-section-2";

export default function Home() {
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
      // The success message will be handled by the HeroSection component
    } catch (error) {
      console.error('Waitlist signup error:', error);
      throw error; // Re-throw so the component can handle the error display
    }
  };

  return (
    <div className="min-h-screen w-screen overflow-hidden antialiased text-white relative">
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
        userCount={1000}
        title="Travel, Discover and Invest in Ghana"
        description="Building Africa’s trusted digital gateway, starting with Ghana, empowering travelers and investors through verified trust and connections."
        placeholder="Enter Email ID"
        ctaText="Join Waitlist"
        onSubmit={handleWaitlistSubmit}
        footerVersion="Adomi App"
      />
    </div>
  );
}
