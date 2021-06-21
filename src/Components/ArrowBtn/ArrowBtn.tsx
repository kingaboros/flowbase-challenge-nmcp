import React from 'react';

import { FaLongArrowAltRight } from 'react-icons/fa';

import '../ArrowBtn/ArrowBtn.scss';

const ArrowBtn = (props: any) => {
  return (
    <div>
      <button onClick={props.onClick} className={props.btnClass}>
        {props.btnName}
        <FaLongArrowAltRight className={props.arrowClass} />
      </button>
    </div>
  );
};

export default ArrowBtn;
