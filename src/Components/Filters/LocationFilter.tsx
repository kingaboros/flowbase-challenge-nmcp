import React from 'react';

const LocationFilter = (props: any) => {
  const dropdownChangeHandler = (e: any) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="filter__wrapper">
      <div className="filter__control">
        <label>Location</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="New York">New York</option>
          <option value="Michigan">Michigan</option>
          <option value="Las Vegas">Las Vegas</option>
        </select>
      </div>
    </div>
  );
};

export default LocationFilter;
