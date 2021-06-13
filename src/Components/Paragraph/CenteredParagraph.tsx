import React from 'react';
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import Heading from '../Heading/Heading';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

import '../Paragraph/CenteredParagraph.scss';

const CenteredParagraph = () => {
  return (
    <div className="container-fluid centered-paragraph__description_wrapper ">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-5">
          <HorizontalLine
            lineStyle={'horizontal-line' + ' ' + 'horizontal-line-center'}
          />
          <Heading
            headingStyle={'heading__title' + ' ' + 'heading__title-white'}
            title={`You're in good hands`}
          />

          <p className="centered-paragraph__description text-center">
            Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
            ne ferae quidem se repellere, idque instituit docere sic: omne
            animal, simul atque integre iudicante itaque aiunt hanc quasi
            involuta aperiri, altera occulta quaedam et voluptatem accusantium
            doloremque.
          </p>
          <ArrowBtn
            btnName={'Learn more'}
            btnClass={
              'btn-warning' +
              ' ' +
              'navbar_button' +
              ' ' +
              'centered-paragraph__button'
            }
            arrowClass={'white_arrow'}
          />
        </div>
      </div>
    </div>
  );
};

export default CenteredParagraph;
