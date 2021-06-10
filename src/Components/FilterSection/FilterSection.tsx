import React from 'react';
import Heading from '../Heading/Heading';

import LookingForFilter from '../Filters/LookingForFilter';
import LocationFilter from '../Filters/LocationFilter';
import PropertyTypeFilter from '../Filters/PropertyTypeFilter';
import PriceFilter from '../Filters/PriceFilter';

import '../FilterSection/FilterSection.scss';

const FilterSection = (props: any) => {
  return (
    <div className="filterSection__wrapper">
      <Heading title={`Find your next place to live`} />
      <div className="container-fluid col-12 ">
        <div className="filterSection__columns row ">
          <div className="col-3 col-xs-12 grey-border">
            <LookingForFilter />
          </div>
          <div className="col-3 col-xs-12 grey-border">
            <LocationFilter />
          </div>
          <div className="col-3 col-xs-12 grey-border">
            <PropertyTypeFilter />
          </div>
          <div className="col-3 col-xs-12">
            <PriceFilter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
