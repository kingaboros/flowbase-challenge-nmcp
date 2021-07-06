import React, { useState } from 'react';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import Heading from '../Heading/Heading';
import LookingForFilter from '../Filters/LookingForFilter';
import LocationFilter from '../Filters/LocationFilter';
import PropertyTypeFilter from '../Filters/PropertyTypeFilter';
import PriceFilter from '../Filters/PriceFilter';
import Properties from '../Properties/Properties';
import ArrowBtn from '../ArrowBtn/ArrowBtn';

import * as classes from './FilterSection.module.scss';
import * as headingClasses from '../Heading/Heading.module.scss';
import * as buttonClasses from '../ArrowBtn/ArrowBtn.module.scss';
import * as lineClasses from '../HorizontalLine/HorizontalLine.module.scss';
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
    <div className={classes.filterSectionWrapper}>
      <HorizontalLine lineStyle={lineClasses.horizontalLine} />
      <Heading
        headingStyle={headingClasses.headingTitle}
        title={strings.headings.filtersHeading}
      />

      <div className={classes.container}>
        <div className={classes.filterSectionColumns}>
          <div className={classes.filterControl}>
            <LookingForFilter
              selected={lookingFor}
              onChangeFilter={lookingForFilterHandler}
            />
          </div>
          <div className={classes.filterControl}>
            <LocationFilter
              selected={location}
              onChangeFilter={locationFilterHandler}
            />
          </div>
          <div className={classes.filterControl}>
            <PropertyTypeFilter
              selected={propertyType}
              onChangeFilter={propertyTypeFilterHandler}
            />
          </div>
          <div className={classes.filterControl}>
            <PriceFilter selected={price} onChangeFilter={priceFilterHandler} />
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.propertiesResults}>
            {props.rooms.map((property: any) => (
              <Properties key={property.id} {...property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
