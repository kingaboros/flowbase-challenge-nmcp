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
        <div>
          {props.rooms.map((rooms: any) => (
            <option>{rooms.price}</option>
          ))}{' '}
        </div>
      </select>
    </div>
  );
};

export default PriceFilter;
