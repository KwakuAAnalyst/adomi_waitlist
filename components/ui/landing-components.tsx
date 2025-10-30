import React from "react";

interface VerificationStepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function VerificationStep({ number, icon, title, description }: VerificationStepProps) {
  return (
    <div className="text-center space-y-4">
      <div className="relative mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold">
          {number}
        </span>
        <div className="text-blue-600">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 font-light">{description}</p>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center space-y-4">
      <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto flex items-center justify-center text-blue-600 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 font-light leading-relaxed">{description}</p>
    </div>
  );
}

interface PersonaCardProps {
  name: string;
  role: string;
  quote: string;
  benefit: string;
}

export function PersonaCard({ name, role, quote, benefit }: PersonaCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-blue-600 font-medium">{role}</p>
      </div>
      <blockquote className="text-gray-600 italic leading-relaxed">
        "{quote}"
      </blockquote>
      <p className="text-green-600 font-medium">{benefit}</p>
    </div>
  );
}

interface WaitlistFormProps {
  onSubmit: (email: string, reason?: string) => Promise<void>;
}

export function WaitlistForm({ onSubmit }: WaitlistFormProps) {
  const [email, setEmail] = React.useState("");
  const [reason, setReason] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [messageType, setMessageType] = React.useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !reason || isLoading) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address");
      setMessageType("error");
      return;
    }

    setIsLoading(true);
    setMessage("");
    setMessageType("");

    try {
      await onSubmit(email, reason);
      setEmail("");
      setReason("");
      setMessage("Successfully joined the waitlist! Follow our socials @theadomiapp");
      setMessageType("success");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            required
          />
        </div>
        
        <div>
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            required
          >
            <option value="">Select what brings you to Adomi</option>
            <option value="traveler">Visiting/Traveling</option>
            <option value="investor">Investing in Ghana</option>
            <option value="diaspora">Diaspora (Living Abroad)</option>
            <option value="returning">Relocating to Ghana</option>
            <option value="business">Business Owner</option>
            <option value="local">Living in Ghana</option>
            <option value="other">Just Curious</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isLoading || !email || !reason}
          className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Joining..." : "Join Waitlist"}
        </button>

        {message && (
          <div
            className={`p-4 rounded-xl text-sm font-medium ${
              messageType === "success"
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-red-100 text-red-800 border border-red-300"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
