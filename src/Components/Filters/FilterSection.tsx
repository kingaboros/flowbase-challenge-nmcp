import React, { useState } from 'react';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import Heading from '../Heading/Heading';
import LookingForFilter from '../Filters/LookingForFilter';
import LocationFilter from '../Filters/LocationFilter';
import PropertyTypeFilter from '../Filters/PropertyTypeFilter';
import PriceFilter from '../Filters/PriceFilter';

import '../Filters/FilterSection.scss';

import APICalls from '../../utils/APICalls';
import strings from '../../themes/strings';

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
    <div className="filterSectionWrapper">
      <HorizontalLine lineStyle={'horizontalLine'} />
      <Heading
        headingStyle={'headingTitle'}
        title={strings.headings.filtersHeading}
      />

      <div className="container">
        <div className="filterSectionColumns">
          <div className="greyBorder filterControl">
            <LookingForFilter
              selected={lookingFor}
              onChangeFilter={lookingForFilterHandler}
            />
          </div>
          <div className="greyBorder filterControl">
            <LocationFilter
              selected={location}
              onChangeFilter={locationFilterHandler}
            />
          </div>
          <div className="greyBorder filterControl">
            <PropertyTypeFilter
              selected={propertyType}
              onChangeFilter={propertyTypeFilterHandler}
            />
          </div>
          <div className="filterControl">
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
