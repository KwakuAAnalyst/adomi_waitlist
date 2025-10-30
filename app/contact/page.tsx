"use client";

import PageLayout from "@/components/ui/page-layout";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PageLayout
      title="Get In Touch"
      description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      gradient="purple"
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Send us a message</h2>
          
          {submitMessage && (
            <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-md mb-6">
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="investment">Investment Opportunities</option>
                <option value="travel">Travel & Tourism</option>
                <option value="partnership">Partnership</option>
                <option value="support">Technical Support</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">📧</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">hello@adomiapp.com</p>
                  <p className="text-gray-600">support@adomiapp.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">📱</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+233 (0) 123 456 789</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600">📍</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">Offices</h3>
                  <p className="text-gray-600">Accra, Ghana</p>
                  <p className="text-gray-600">London, UK</p>
                  <p className="text-gray-600">Toronto, Canada</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Quick Links */}
          <div className="bg-purple-50 rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Help</h3>
            <div className="space-y-3">
              <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                → How do I join the waitlist?
              </a>
              <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                → What investment opportunities are available?
              </a>
              <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                → How do I plan a trip to Ghana?
              </a>
              <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                → Partnership opportunities
              </a>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-gray-50 rounded-lg p-6 text-center shadow-sm">
            <h3 className="font-semibold mb-2 text-gray-900">Response Time</h3>
            <p className="text-gray-600 text-sm">
              We typically respond to all inquiries within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
