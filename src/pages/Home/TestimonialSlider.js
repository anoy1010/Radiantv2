import React, { useState } from 'react';
import Slider from 'react-slick';

const testimonials = [
  { name: "Chris", location: "Ciao FevAW USA", text: "Up maids me an ample stood given. Certainty say suffering his him collected intention promotion." },
  { name: "Chris", location: "Ciao FevAW USA", text: "Up maids me an ample stood given. Certainty say suffering his him collected intention promotion." },
  { name: "Andrew Chris", location: "Client from Uganda", text: "Certainly say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too." },
  { name: "Chris Evans", location: "Client from USA", text: "Up maids me an ample stood given. Certainty say suffering his him collected intention promotion." },
  { name: "Chris", location: "Ciao FevAW USA", text: "Up maids me an ample stood given. Certainty say suffering his him collected intention promotion." },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <div className="max-w-sm lg:max-w-6xl h-auto mx-auto py-10 px-8 sm:px-12 lg:px-8 overflow-hidden">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`lg:h-[300px]  p-4 lg:p-6  text-center shadow-lg transition-transform duration-300 ease-in-out ${activeIndex === index ? 'opacity-100 scale-105' : 'opacity-60 scale-95'}`}>
            <div className="flex flex-col bg-white lg:h-[250px] justify-around items-center gap-y-20 lg:gap-y-0 rounded-lg">
              <p className="text-[16px] lg:text-lg text-gray-800 mb-4">{testimonial.text}</p>
              <h4 className="text-lg font-bold uppercase text-orange-500 mb-2">{testimonial.name}</h4>
              <span className="text-sm text-gray-600">{testimonial.location}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
