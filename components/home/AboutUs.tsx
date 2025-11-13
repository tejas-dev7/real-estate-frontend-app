export default function AboutUs() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            About Havenly
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
            Havenly is your trusted partner in finding the perfect home. With
            over 10,000 properties across the United States, we're dedicated to
            making your home search simple, efficient, and enjoyable.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Our platform combines cutting-edge technology with personalized
            service to help you discover homes that match your lifestyle and
            budget. Whether you're a first-time buyer, seasoned investor, or
            looking to upgrade, we're here to guide you every step of the way.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                10,000+
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Properties Listed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                5,000+
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                50+
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Cities Covered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
