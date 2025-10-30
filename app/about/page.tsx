"use client";

import PageLayout from "@/components/ui/page-layout";

export default function AboutPage() {
  return (
    <PageLayout
      title="About Adomi App"
      description="Bridging hearts, homes, and opportunities between Ghana and the global Ghanaian diaspora."
      gradient="yellow"
    >
      {/* Mission Section */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            Adomi App was created to reconnect the global Ghanaian diaspora with their homeland 
            through meaningful travel experiences, cultural exploration, and sustainable investment opportunities.
          </p>
          <p className="text-lg text-gray-600">
            We believe that distance should never diminish the bond between Ghanaians worldwide 
            and their beautiful country. Through technology, community, and shared vision, 
            we're building bridges that span continents.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Community</h3>
            <p className="text-gray-600">
              Building strong connections between Ghanaians worldwide and fostering a sense of belonging.
            </p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Sustainability</h3>
            <p className="text-gray-600">
              Promoting responsible tourism and investments that benefit local communities and the environment.
            </p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Excellence</h3>
            <p className="text-gray-600">
              Delivering exceptional experiences and opportunities that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-yellow-50 rounded-lg p-8 mb-16 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              Founded in 2025, Adomi App emerged from a simple observation: millions of Ghanaians 
              living abroad yearned for meaningful connections to their homeland, while Ghana 
              needed sustainable investment and tourism to fuel its growth.
            </p>
            <p className="text-gray-600 mb-4">
              Our founders, themselves members of the diaspora, experienced firsthand the challenges 
              of finding authentic travel experiences and trustworthy investment opportunities 
              in Ghana from abroad.
            </p>
            <p className="text-gray-600">
              Today, Adomi App serves as the digital bridge that makes these connections possible, 
              creating a win-win scenario for the diaspora and Ghana's development.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">By the Numbers</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Countries Reached</span>
                <span className="font-semibold text-gray-900">45+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Community Members</span>
                <span className="font-semibold text-gray-900">2,500+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Successful Investments</span>
                <span className="font-semibold text-gray-900">$2M+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Travel Experiences</span>
                <span className="font-semibold text-gray-900">500+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">KA</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Kwame Asante</h3>
            <p className="text-gray-600">Co-Founder & CEO</p>
            <p className="text-sm text-gray-500 mt-2">London, UK | Tech & Finance</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">AM</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Ama Mensah</h3>
            <p className="text-gray-600">Co-Founder & CTO</p>
            <p className="text-sm text-gray-500 mt-2">Toronto, Canada | Software Engineering</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">KO</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Kojo Osei</h3>
            <p className="text-gray-600">Head of Operations</p>
            <p className="text-sm text-gray-500 mt-2">Accra, Ghana | Tourism & Business</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
