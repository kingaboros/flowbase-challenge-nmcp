import React from 'react';
import '../Global/ArrowBtn.scss';
import { FaLongArrowAltRight } from 'react-icons/fa';

const ArrowBtn = () => {
  return (
    <div>
      <button className="btn btn-dark good-hands__button">
        Learn More <FaLongArrowAltRight className="good-hands__button__arrow" />
      </button>
    </div>
  );
};

export default ArrowBtn;
