import React, { useState } from 'react';
import axios from 'axios';

import ArrowBtn from '../components/ArrowBtn/ArrowBtn';
import Properties from '../components/Properties/Properties';

const APICalls = (props: any) => {
  const [properties, setProperties] = useState([]);

  const getProperties = (props: any) => {
    axios
      .get('https://rent-challenge-api.herokuapp.com/rents')
      .then(response => {
        setProperties(response.data);
        console.log(response.data);
      });
  };

  return (
    <div className="row col-10">
      <ArrowBtn
        onClick={getProperties}
        btnName={'Find more properties'}
        btnClass={`${'btn-dark'} ${'paragraph__button'}`}
        arrowClass={'orange_arrow'}
      />
      <div className="">
        <div className="row col-sm-10">
          {properties.map((property: any) => (
            <Properties key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default APICalls;
