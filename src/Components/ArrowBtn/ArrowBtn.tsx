import React from 'react';

import { FaLongArrowAltRight } from 'react-icons/fa';

import * as classes from './ArrowBtn.module.scss';

const ArrowBtn = (props: any) => {
  return (
    <div className={classes.buttonBtn}>
      <button onClick={props.onClick} className={props.btnClass}>
        {props.btnName}
        <FaLongArrowAltRight className={props.arrowClass} />
      </button>
    </div>
  );
};

export default ArrowBtn;
