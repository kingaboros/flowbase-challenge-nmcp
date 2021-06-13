import React from 'react';
import './TestimonialCard.scss';

const TestimonialCard = (props: any) => {
  return (
    <div className="container-fluid">
      <div className="row testimonial-card__text">
        <div className="col-4 ">
          <p> {props.text} </p>
        </div>
        <div className="row">
          <div className="col-5 testimonial-card__img">
            <img src={props.img} />
          </div>
        </div>
        <div className="col-8">
          <h3>{props.name}</h3>
          <p>{props.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
