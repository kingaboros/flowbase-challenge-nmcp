import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

import img from '../../Images/Content-Image.png';
import './GoodHands.scss';

const GoodHands = () => {
  return (
    <div className="good-hands__wrapper">
      <div className="container-fluid col-12">
        <div className="row">
          <div className="col-md-6 col-12">
            <img
              src={img}
              alt="people speaking with agent"
              className="good-hands__img"
            />
          </div>

          <div className="col-md-6 col-12 good-hands__text">
            <HorizontalLine />
            <div className="good-hands__title">You're in good hands</div>
            <p className="good-hands__description">
              Torquatos nostros? quos dolores eos, qui dolorem ipsum per se
              texit, ne ferae quidem se repellere, idque instituit docere sic:
              omne animal, simul atque integre iudicante itaque aiunt hanc quasi
              involuta aperiri, altera occulta quaedam et voluptatem accusantium
              doloremque.
            </p>
            <button className="btn btn-dark good-hands__button">
              Learn More{' '}
              <FaLongArrowAltRight className="good-hands__button__arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodHands;
