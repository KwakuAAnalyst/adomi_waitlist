"use client";

import PageLayout from "@/components/ui/page-layout";

export default function CommunityPage() {
  return (
    <PageLayout
      title="Join Our Global Community"
      description="Connect with fellow Ghanaians and investors worldwide. Share experiences, get advice, and build lasting relationships."
      gradient="green"
    >
      {/* Community Stats */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-2">2,500+</div>
          <div className="text-gray-600">Active Members</div>
        </div>
        <div className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-green-600 mb-2">45</div>
          <div className="text-gray-600">Countries Represented</div>
        </div>
        <div className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-yellow-600 mb-2">150+</div>
          <div className="text-gray-600">Success Stories</div>
        </div>
      </div>

      {/* Community Features */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Discussion Forums</h3>
          <p className="text-gray-600 mb-6">
            Join conversations about travel tips, investment advice, cultural insights, and more.
          </p>
          <div className="space-y-3">
            <div className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
              <div className="font-medium text-gray-900">💼 Investment Opportunities</div>
              <div className="text-sm text-gray-600">124 active discussions</div>
            </div>
            <div className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
              <div className="font-medium text-gray-900">✈️ Travel & Tourism</div>
              <div className="text-sm text-gray-600">89 active discussions</div>
            </div>
            <div className="bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
              <div className="font-medium text-gray-900">🏠 Real Estate</div>
              <div className="text-sm text-gray-600">67 active discussions</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Events & Meetups</h3>
          <p className="text-gray-600 mb-6">
            Attend virtual and in-person events to network and learn from experts.
          </p>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4 hover:bg-blue-50 transition-colors rounded-r p-2">
              <div className="font-medium text-gray-900">Ghana Investment Summit 2025</div>
              <div className="text-sm text-gray-600">December 15, 2025 • Virtual</div>
            </div>
            <div className="border-l-4 border-green-500 pl-4 hover:bg-green-50 transition-colors rounded-r p-2">
              <div className="font-medium text-gray-900">Accra Meetup</div>
              <div className="text-sm text-gray-600">November 20, 2025 • In-person</div>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 hover:bg-yellow-50 transition-colors rounded-r p-2">
              <div className="font-medium text-gray-900">Diaspora Connect</div>
              <div className="text-sm text-gray-600">November 5, 2025 • Virtual</div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <section className="bg-green-50 rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                KA
              </div>
              <div className="ml-4">
                <div className="font-semibold text-gray-900">Kwame Asante</div>
                <div className="text-sm text-gray-600">London, UK → Accra, Ghana</div>
              </div>
            </div>
            <p className="text-gray-600">
              "Through Adomi, I found the perfect investment opportunity in Accra's tech sector. 
              The community support was incredible throughout my journey back home."
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                AM
              </div>
              <div className="ml-4">
                <div className="font-semibold text-gray-900">Ama Mensah</div>
                <div className="text-sm text-gray-600">Toronto, Canada</div>
              </div>
            </div>
            <p className="text-gray-600">
              "I discovered amazing cultural tours and made lifelong connections. 
              Adomi helped me reconnect with my roots in the most meaningful way."
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
