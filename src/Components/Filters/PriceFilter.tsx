import React from 'react';

const PriceFilter = (props: any) => {
  const dropdownChangeHandler = (e: any) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="filter__wrapper">
      <div className="filter__control">
        <label>Price</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="0-2000">$0-2000</option>
          <option value="2000-10000">$2000-10000</option>
          <option value="10000+">$10000+</option>
        </select>
      </div>
    </div>
  );
};

export default PriceFilter;
