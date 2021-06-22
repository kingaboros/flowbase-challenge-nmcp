import React, { useState } from 'react';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import Heading from '../Heading/Heading';

import LookingForFilter from '../Filters/LookingForFilter';
import LocationFilter from '../Filters/LocationFilter';
import PropertyTypeFilter from '../Filters/PropertyTypeFilter';
import PriceFilter from '../Filters/PriceFilter';

import '../Filters/FilterSection.scss';

import APICalls from '../../utils/APICalls';

const FilterSection = (props: any) => {
  const [lookingFor, setLookingFor] = useState('All');
  const lookingForFilterHandler = (selectedLookingFor: any) => {
    setLookingFor(selectedLookingFor);
  };

  const [location, setLocation] = useState('');
  const locationFilterHandler = (selectedLocation: any) => {
    setLocation(selectedLocation);
  };
  const [propertyType, setPropertyType] = useState('');
  const propertyTypeFilterHandler = (selectedPropertyType: any) => {
    setPropertyType(selectedPropertyType);
  };
  const [price, setPrice] = useState('');
  const priceFilterHandler = (selectedPrice: any) => {
    setPrice(selectedPrice);
  };

  return (
    <div className="filter-section__wrapper">
      <HorizontalLine lineStyle={'horizontal-line'} />
      <Heading
        headingStyle={'heading__title'}
        title={`Find your next place to live`}
      />

      <div className="container col-12 ">
        <div className="row filter-section__columns ">
          <div className="col-md-3 col-12 grey-border filter__control">
            <LookingForFilter
              selected={lookingFor}
              onChangeFilter={lookingForFilterHandler}
            />
          </div>
          <div className="col-md-3 col-12 grey-border filter__control">
            <LocationFilter
              selected={location}
              onChangeFilter={locationFilterHandler}
            />
          </div>
          <div className="col-md-3 col-12 grey-border filter__control">
            <PropertyTypeFilter
              selected={propertyType}
              onChangeFilter={propertyTypeFilterHandler}
            />
          </div>
          <div className="col-md-3 col-xs-12 filter__control">
            <PriceFilter selected={price} onChangeFilter={priceFilterHandler} />
          </div>
        </div>
        <div className="row">
          <APICalls />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FilterSection;
