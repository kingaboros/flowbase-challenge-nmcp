import React from 'react';
import HorizontalLine from '../../HorizontalLine/HorizontalLine';

import './Heading.scss';

const Heading = (props: any) => {
  return (
    <div className="heading__wrapper">
      <div className="container-fluid col-12">
        <div className="row">
          <div className="col-md-6 col-12"></div>

          <div className="col-md-6 col-12 heading__text">
            <HorizontalLine />
            <div className="heading__title">{props.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
