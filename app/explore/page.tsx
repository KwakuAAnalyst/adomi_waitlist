"use client";

import PageLayout from "@/components/ui/page-layout";

export default function ExplorePage() {
  return (
    <PageLayout
      title="Explore Ghana's Hidden Gems"
      description="Discover amazing destinations, investment opportunities, and cultural experiences across Ghana."
      gradient="blue"
    >
      {/* Destinations Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Kumasi Cultural Sites</h3>
            <p className="text-gray-600 mb-4">Explore the rich Ashanti heritage and traditional crafts.</p>
            <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Learn More →
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Cape Coast Beaches</h3>
            <p className="text-gray-600 mb-4">Beautiful coastal destinations with historical significance.</p>
            <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Learn More →
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Accra Business Hub</h3>
            <p className="text-gray-600 mb-4">Modern city experiences and investment opportunities.</p>
            <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Learn More →
            </button>
          </div>
        </div>
      </div>

      {/* Investment Opportunities */}
      <section className="bg-blue-50 rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Investment Opportunities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Real Estate</h3>
            <p className="text-gray-600 mb-4">
              Discover prime real estate opportunities in Ghana's growing cities and tourist destinations.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Residential developments in Accra</li>
              <li>• Commercial properties in Kumasi</li>
              <li>• Tourism resorts on the coast</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Business Ventures</h3>
            <p className="text-gray-600 mb-4">
              Join the growing economy with local business partnerships and startups.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Tech startups in Accra</li>
              <li>• Agricultural ventures</li>
              <li>• Tourism and hospitality</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
