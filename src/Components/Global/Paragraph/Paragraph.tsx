import React from 'react';
import ArrowBtn from '../ArrowBtn/ArrowBtn';

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
            <ArrowBtn
              btnName={'Learn more'}
              btnClass={'btn-dark' + ' ' + 'paragraph__button'}
              arrowClass={'orange_arrow'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
