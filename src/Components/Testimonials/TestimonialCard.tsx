import React from 'react';
import './TestimonialCard.scss';
import img1 from '../../Images/testimonial1.png';

const TestimonialCard = (props: any) => {
  return (
    <div className="container">
      <div className="testimonial-card__text">
        <div className="row ">
          <div className="col-12 ">
            <p className={props.textStyle}>
              “Certe, inquam, pertinax non existimant oportere exquisitis
              rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti
              et quidem faciunt, ut aut.”
            </p>
          </div>
          <div className={props.testimonialStyle}>
            <div className="row testimonial-card_row">
              <div className="col-4 ">
                <img className="testimonial-card__img" src={img1} />
              </div>
              <div className="col-8 testimonial-card__description">
                <h4 className="testimonial-card__name">Lara Madrigal</h4>
                <p className="testimonial-card__role">Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
