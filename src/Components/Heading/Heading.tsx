import React from 'react';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

import './Heading.scss';

const Heading = (props: any) => {
  return (
    <div className="heading__wrapper">
      <div className="container col-12">
        <div className="row full-width">
          <div className="col-md-6 col-12 heading__text">
            <div className={props.headingStyle}>{props.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
