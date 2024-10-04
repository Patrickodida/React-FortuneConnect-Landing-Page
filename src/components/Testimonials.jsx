import React from 'react'
import Image1 from '../images/image1.jpeg'
import Image2 from '../images/image2.jpeg'
import Image3 from '../images/image3.jpeg'

const testimonials = [
  { name: 'John Doe', feedback: 'FortuneConnect helped me manage our investment club seamlessly. The platform’s collective investment tools make decision-making and tracking contributions so much easier!', image: Image1 },
  { name: 'Jane Smith', feedback: 'The curated investment opportunities on FortuneConnect allowed me to invest in high-potential projects. It’s the best platform I’ve used to grow my portfolio.', image: Image2 },
  { name: 'Sam Johnson', feedback: 'FortuneConnect’s real-time portfolio tracking has been a game-changer for me. I can now monitor my club’s performance and make informed decisions instantly.', image: Image3 },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#3DC3E4]">
      <div className="container mx-auto text-center w-[90%] m-auto m-w-[1280px]">
        <h2 className="text-3xl font-bold mb-12 text-white">What Our Users Say | Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                <img src={testimonial.image} alt={`${testimonial.name}`}
                className="w-24 h-24 mx-auto rounded-full mb-4"
            />
              <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
