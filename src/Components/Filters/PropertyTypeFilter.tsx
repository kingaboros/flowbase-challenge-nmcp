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
        {props.rooms.map((rooms: any) => (
          <option key={rooms.id}>{rooms.rooms.bedrooms}</option>
        ))}
      </select>
    </div>
  );
};

export default PropertyTypeFilter;
