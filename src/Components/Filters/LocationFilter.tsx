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
        {props.rooms.map((rooms: any) => (
          <option key={rooms.id}>{rooms.location}</option>
        ))}
      </select>
    </div>
  );
};

export default LocationFilter;
