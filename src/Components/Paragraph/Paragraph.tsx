import React from 'react';
import ArrowBtn from '../ArrowBtn/ArrowBtn';

import img1 from '../../Images/Content-Image.png';
import '../Paragraph/Paragraph.scss';
import Heading from '../Heading/Heading';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

const Paragraph = (props: any) => {
  return (
    <div className="container-fluid paragraph__wrapper col-12">
      <div className={props.paragraphClass}>
        <div className="col-md-6 col-12">
          <img
            src={props.imgOrientation}
            alt="people speaking with agent"
            className={props.imgStyle}
          />
        </div>

        <div className={props.descriptionStyle}>
          <HorizontalLine lineStyle={'horizontal-line'} />
          <Heading
            headingStyle={'heading__title'}
            title={`You're in good hands`}
          />
          <p className="paragraph__description">
            Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
            ne ferae quidem se repellere, idque instituit docere sic: omne
            animal, simul atque integre iudicante itaque aiunt hanc quasi
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
  );
};

export default Paragraph;
