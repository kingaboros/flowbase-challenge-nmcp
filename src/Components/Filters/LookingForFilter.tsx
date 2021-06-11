import React from 'react';

const LookingForFilter = (props: any) => {
  const dropdownChangeHandler = (e: any) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="filter__wrapper">
      <div className="filter__control">
        <label>Looking for</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="blank">--------</option>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
          <option value="let">Let</option>
        </select>
      </div>
    </div>
  );
};

export default LookingForFilter;
