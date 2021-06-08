import React from 'react';
import '../Global/ArrowBtn.scss';
import { FaLongArrowAltRight } from 'react-icons/fa';

import '../ArrowBtn/ArrowBtn.scss';

const ArrowBtn = (props: any) => {
  return (
    <div>
      <button className={props.btnClass}>
        {props.btnName}
        <FaLongArrowAltRight className={props.arrowClass} />
      </button>
    </div>
  );
};

export default ArrowBtn;

{
  /* <button className="btn btn-dark good-hands__button">
  Learn More <FaLongArrowAltRight className="good-hands__button__arrow" />
</button>; */
}
