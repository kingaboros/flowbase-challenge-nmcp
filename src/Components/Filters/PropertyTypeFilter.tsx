import React, { useState, useEffect } from 'react';
import strings from '../../themes/strings';

import * as classes from './FilterSection.module.scss';

const PropertyTypeFilter = (props: any) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const tempArrRooms: any = [];
    new Set(props.rooms.map((item: any) => item.rooms.bedrooms)).forEach(
      (item: any) => {
        tempArrRooms.push(<option key={item}>{item}</option>);
      }
    );
    setRooms(tempArrRooms);
  }, [props.rooms]);

  const dropdownChangeHandler = (e: any) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className={classes.filterWrapper}>
      <label>{strings.filterLabels.property}</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="blank">Choose option</option>
        {rooms}
      </select>
    </div>
  );
};

export default PropertyTypeFilter;
