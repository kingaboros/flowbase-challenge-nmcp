import React from 'react';
import strings from '../../themes/strings';

const LookingForFilter = (props: any) => {
  const dropdownChangeHandler = (e: any) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="filter__wrapper">
      <div className="filter__control">
        <label>{strings.filterLabels.looking}</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="blank">--------</option>
          <option value="all">All</option>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
          <option value="let">Let</option>
        </select>
      </div>
    </div>
  );
};

export default LookingForFilter;
