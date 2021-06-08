import React from 'react';
import GoodHands from '../../GoodHands/GoodHands';

import '../Paragraph/Paragraph.scss';

const Paragraph = () => {
  return (
    <div>
      <GoodHands />
      <div>
        <p className="good-hands__description">
          Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
          ne ferae quidem se repellere, idque instituit docere sic: omne animal,
          simul atque integre iudicante itaque aiunt hanc quasi involuta
          aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </p>
      </div>
    </div>
  );
};

export default Paragraph;
