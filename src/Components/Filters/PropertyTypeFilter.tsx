import React from 'react';
import strings from '../../themes/strings';

import * as classes from './FilterSection.module.scss';

const PropertyTypeFilter = (props: any) => {
  const dropdownChangeHandler = (e: any) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className={classes.filterWrapper}>
      <label>{strings.filterLabels.property}</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="blank">--------</option>
        <option value="house">House</option>
        <option value="flat">Flat</option>
        <option value="holiday home">Holiday Home</option>
        <option value="bungalow">Bungalow</option>
      </select>
    </div>
  );
};

export default PropertyTypeFilter;
