import React, { useState } from 'react';
import axios from 'axios';

import ArrowBtn from '../components/ArrowBtn/ArrowBtn';
import Properties from '../components/Properties/Properties';
import strings from '../themes/strings';

import * as classes from '../components/Filters/FilterSection.module.scss';
import * as buttonClasses from '../components/ArrowBtn/ArrowBtn.module.scss';

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
    <div className={classes.propertiesResults}>
      <ArrowBtn
        onClick={getProperties}
        btnName={strings.buttons.filterBtn}
        btnClass={buttonClasses.filterBtn}
        arrowClass={buttonClasses.orangeArrow}
      />
      <div>
        <div className={classes.propertiesResults}>
          {properties.map((property: any) => (
            <Properties key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default APICalls;
