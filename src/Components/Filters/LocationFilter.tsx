import React from 'react';
import * as classes from './FilterSection.module.scss';
import strings from '../../themes/strings';

const LocationFilter = (props: any) => {
  const dropdownChangeHandler = (e: any) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className={classes.filterWrapper}>
      <label>{strings.filterLabels.location}</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="blank">--------</option>
        <option value="New York">New York</option>
        <option value="Michigan">Michigan</option>
        <option value="Las Vegas">Las Vegas</option>
      </select>
    </div>
  );
};

export default LocationFilter;
