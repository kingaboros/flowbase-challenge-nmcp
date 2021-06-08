import React from 'react';
import GoodHands from '../../GoodHands/GoodHands';
import Heading from '../Heading/Heading';

import img from '../../../Images/Content-Image.png';
import '../Paragraph/Paragraph.scss';

const Paragraph = () => {
  return (
    <div className="paragraph__wrapper">
      <div className="container-fluid col-12">
        <div className="row">
          <div className="col-md-6 col-12">
            <img
              src={img}
              alt="people speaking with agent"
              className="paragraph__img"
            />
          </div>

          <div className="col-md-6 col-12 paragraph__description_wrapper">
            <p className="paragraph__description">
              Torquatos nostros? quos dolores eos, qui dolorem ipsum per se
              texit, ne ferae quidem se repellere, idque instituit docere sic:
              omne animal, simul atque integre iudicante itaque aiunt hanc quasi
              involuta aperiri, altera occulta quaedam et voluptatem accusantium
              doloremque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
