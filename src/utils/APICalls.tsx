import React, { useState } from 'react';
import axios from 'axios';

import ArrowBtn from '../components/ArrowBtn/ArrowBtn';
import Properties from '../components/Properties/Properties';
import strings from '../themes/strings';

const APICalls = (props: any) => {
  const [properties, setProperties] = useState([]);

  const getProperties = (props: any) => {
    axios
      .get('https://rent-challenge-api.herokuapp.com/rents')
      .then(response => {
        setProperties(response.data);
      });
  };

  return (
    <div className="row col-12">
      <ArrowBtn
        onClick={getProperties}
        btnName={strings.buttons.filterBtn}
        btnClass={'filterBtn'}
        arrowClass={'orangeArrow'}
      />
      <div className="">
        <div className="row col-12">
          {properties.map((property: any) => (
            <Properties key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default APICalls;
