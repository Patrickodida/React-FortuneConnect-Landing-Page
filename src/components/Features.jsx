import React from 'react';
import Invimg1 from '../images/inv-management1.jpeg'
import Invopport from '../images/inv-opportunity.jpeg'
import Invportfolio from '../images/portfolio-img.jpeg'

const features = [
  { title: 'Collective Investment Management:', description: 'Allows users to create and manage investment clubs or collective investment groups (CIGs), where members can collaborate on investment decisions, track contributions, and view performance metrics.', image: Invimg1 },
  { title: 'Investment Opportunities Marketplace:', description: 'Curates a list of investment products linked to fund managers, providing performance metrics and detailed proposals from investees looking for funding.', image: Invopport },
  { title: 'Real-time Portfolio Tracking and Analytics:', description: 'Offers users individual and club-level portfolio views with real-time updates on investment performance, including gains, losses, and dividends.', image: Invportfolio },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-[#3DC3E4]">
      <div className="container mx-auto text-center w-[90%] m-auto m-w-[1280px]">
        <h2 className="text-3xl font-bold mb-12 text-[white]">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <img src={feature.image} alt={`${feature.name}`}

                />
              <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;