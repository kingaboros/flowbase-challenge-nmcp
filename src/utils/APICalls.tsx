import React from 'react';
import axios from 'axios';

import ArrowBtn from '../components/ArrowBtn/ArrowBtn';

const APICalls = (props: any) => {
  const getProperties = (props: any) => {
    axios
      .get('https://rent-challenge-api.herokuapp.com/rents')
      .then(response => {
        console.log(response.data);
      });
  };
  return (
    <div>
      <ArrowBtn
        onClick={getProperties}
        btnName={'Search'}
        btnClass={`${'btn-dark'} ${'paragraph__button'}`}
        arrowClass={'orange_arrow'}
      />
    </div>
  );
};
export default APICalls;
