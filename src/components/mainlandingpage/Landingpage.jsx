import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="bg-da-pri-col text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Ride with Confidence</h1>
          <p className="mt-4 text-xl">
            Fast, reliable, and affordable cab services at your fingertips.
          </p>
          <button className="mt-8 px-6 py-3 bg-yellow-400 text-indigo-600 rounded-full font-bold hover:bg-yellow-500">
           Explore
          </button>
        </div>
      </section>

      <section className="bg-yellow-400 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Become a Driving partner today</h1>
          <p className="mt-4 text-xl">
            Become a Driving partner today
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-400 text-indigo-600 rounded-full font-bold hover:bg-blue-500">
            Explore
          </button>
        </div>
      </section>

      <section className="bg-orange-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Become a Restaurant partner today</h1>
          <p className="mt-4 text-xl">
            Become a partner today
          </p>
          <button className="mt-8 px-6 py-3 bg-yellow-400 text-indigo-600 rounded-full font-bold hover:bg-yellow-500">
            Explore
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="src\assets\icons8-taxi-96.png"
                alt="Fast"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Fast Service</h3>
              <p className="mt-2 text-gray-600">
                We prioritize your time with fast, reliable pickups and drop-offs.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://img.icons8.com/color/96/000000/wallet.png"
                alt="Affordable"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Affordable</h3>
              <p className="mt-2 text-gray-600">
                We offer the best rates with no hidden costs.
              </p>
            </div>
            <div className="text-center">
              <img
                src="src\assets\icons8-secure-payment-96.png"

                alt="Secure"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Secure Payments</h3>
              <p className="mt-2 text-gray-600">
                Pay safely with our trusted payment gateway options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-12">
            What Our Riders Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">
                "Best cab service in the city! I use it every day, and it's
                always on time and affordable."
              </p>
              <div className="mt-4 text-indigo-600 font-bold">- John Doe</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">
                "Highly recommended! Great service and friendly drivers."
              </p>
              <div className="mt-4 text-indigo-600 font-bold">- Jane Smith</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 py-12 text-center">
        <h2 className="text-3xl font-bold text-white">
          Ready to Ride with Us?
        </h2>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-indigo-600 rounded-full font-bold hover:bg-yellow-500">
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Cab Service. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
