import React from 'react';

import img1 from '../../Images/testimonial1.png';
import TestimonialCard from './TestimonialCard';

import './Testimonials.scss';

const testimonials = [
  {
    name: 'Lara Madrigal',
    role: 'client',
    img: img1,
    text: '“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”',
  },
  {
    name: 'John Simba',
    role: 'client',
    img: img1,
    text: '“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”',
  },
  {
    name: 'Freya Adams',
    role: 'client',
    img: img1,
    text: '“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”',
  },
];

const Testimonials = () => {
  return (
    <div className="container testimonials">
      <div className="row">
        {testimonials.map(testimonials => (
          <TestimonialCard
            name={testimonials.name}
            role={testimonials.role}
            img={testimonials.img}
            text={testimonials.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
