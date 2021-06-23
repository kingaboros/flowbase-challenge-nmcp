import React from 'react';

import * as classes from './Heading.module.scss';

const Heading = (props: any) => {
  return (
    <div className={classes.headingWrapper}>
      <div className={classes.row}>
        <div className={classes.headingText}>
          <div className={props.headingStyle}>{props.title}</div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
