import React from 'react';
import strings from '../../themes/strings';

import * as classes from '../Filters/FilterSection.scss';

const PriceFilter = (props: any) => {
  const dropdownChangeHandler = (e: any) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className={classes.filterWrapper}>
      <label>{strings.filterLabels.price}</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="blank">--------</option>
        <option value="0-2000">$0-2000</option>
        <option value="2000-10000">$2000-10000</option>
        <option value="10000+">$10000+</option>
      </select>
    </div>
  );
};

export default PriceFilter;
