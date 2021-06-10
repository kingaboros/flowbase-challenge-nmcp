import React from 'react';

const PropertyTypeFilter = (props: any) => {
  const dropdownChangeHandler = (e: any) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="filter__wrapper">
      <div className="filter__control">
        <label>Property Type</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="house">House</option>
          <option value="flat">Flat</option>
          <option value="holiday home">Holiday Home</option>
          <option value="bungalow">Bungalow</option>
        </select>
      </div>
    </div>
  );
};

export default PropertyTypeFilter;
