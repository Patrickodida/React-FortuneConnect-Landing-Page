import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const pricingPlans = [
  {
    name: "Basic",
    price: "40,000 UGX/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    name: "Pro",
    price: "75,000 UGX/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    name: "Enterprise",
    price: "150,000 UGX/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
];

const Pricing = () => {
  return (
    <>
      <Navbar />
      <main>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center w-[90%] m-auto">
          <h2 className="text-3xl font-bold mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-gray-600 mt-2">{plan.price}</p>
                <ul className="mt-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/signup"
                  className="mt-4 inline-block bg-[#3DC3E4] text-white py-2 px-4 rounded-lg"
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
