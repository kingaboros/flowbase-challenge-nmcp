import React from 'react';

import './Heading.scss';

const Heading = (props: any) => {
  return (
    <div className="headingWrapper">
      <div className="row">
        <div className="headingText">
          <div className={props.headingStyle}>{props.title}</div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
