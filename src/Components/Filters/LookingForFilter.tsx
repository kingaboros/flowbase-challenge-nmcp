import React, { useEffect, useState } from 'react';
import strings from '../../themes/strings';

import * as classes from './FilterSection.module.scss';

const LookingForFilter = (props: any) => {
  const [names, setNames] = useState([]);

  const dropdownChangeHandler = (e: any) => {
    props.onChangeFilter(e.target.value);
  };
  useEffect(() => {
    const tempArrNames: any = [];
    new Set(props.rooms.map((item: any) => item.description)).forEach(
      (item: any) => {
        tempArrNames.push(<option key={item}>{item}</option>);
      }
    );
    setNames(tempArrNames);
  }, [props.rooms]);

  return (
    <div className={classes.filterWrapper}>
      <label>{strings.filterLabels.looking}</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="blank">Choose option</option>
        {names}
      </select>
    </div>
  );
};

export default LookingForFilter;
