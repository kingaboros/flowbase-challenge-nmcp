import React from 'react';
import strings from '../../themes/strings';

import * as classes from './FilterSection.module.scss';

const LookingForFilter = (props: any) => {
  const dropdownChangeHandler = (e: any) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className={classes.filterWrapper}>
      <label>{strings.filterLabels.looking}</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="blank">--------</option>
        {props.rooms.map((rooms: any) => (
          <option key={rooms.id}>{rooms.description}</option>
        ))}
      </select>
    </div>
  );
};

export default LookingForFilter;
