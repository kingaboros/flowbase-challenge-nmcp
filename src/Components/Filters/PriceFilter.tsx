import React from 'react';
import strings from '../../themes/strings';

import * as classes from './FilterSection.module.scss';

const PriceFilter = (props: any) => {
  const dropdownChangeHandler = (e: any) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className={classes.filterWrapper}>
      <label>{strings.filterLabels.price}</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="blank">--------</option>
        {props.rooms.map((rooms: any) => (
          <option key={rooms.id}>{rooms.price}</option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilter;
