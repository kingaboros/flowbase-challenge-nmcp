import React, { useState, useEffect } from 'react';
import strings from '../../themes/strings';

import * as classes from './FilterSection.module.scss';

const PriceFilter = (props: any) => {
  const [prices, setPrices] = useState([]);

  const dropdownChangeHandler = (e: any) => {
    props.onChangeFilter(e.target.value);
  };

  useEffect(() => {
    const tempArrPrices: any = [];
    new Set(props.rooms.map((item: any) => item.price)).forEach((item: any) => {
      tempArrPrices.push(<option key={item}>{item}</option>);
    });
    setPrices(tempArrPrices);
  }, [props.rooms]);

  return (
    <div className={classes.filterWrapper}>
      <label>{strings.filterLabels.price}</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="blank">--------</option>
        {prices}
      </select>
    </div>
  );
};

export default PriceFilter;
