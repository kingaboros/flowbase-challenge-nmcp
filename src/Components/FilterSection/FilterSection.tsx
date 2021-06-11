import React, { useState } from 'react';
import Heading from '../Heading/Heading';

import LookingForFilter from '../Filters/LookingForFilter';
import LocationFilter from '../Filters/LocationFilter';
import PropertyTypeFilter from '../Filters/PropertyTypeFilter';
import PriceFilter from '../Filters/PriceFilter';

import '../FilterSection/FilterSection.scss';
import { renderIntoDocument } from 'react-dom/test-utils';

const properties = [
  {
    id: 1,
    type: 'flat',
    location: 'New York',
    title: 'Malto House',
    image: 'house1',
    bedrooms: 4,
    bathrooms: 2,
    symbol: 2,
    price: 2000,
    lookingFor: 'rent',
  },
  {
    id: 2,
    type: 'house',
    location: 'Las Vegas',
    title: 'Vegas House',
    image: 'house2',
    bedrooms: 4,
    bathrooms: 2,
    symbol: 2,
    price: 3500,
    lookingFor: 'let',
  },
  {
    id: 3,
    type: 'bungalow',
    location: 'Michigan',
    title: 'Mich House',
    image: 'house3',
    bedrooms: 4,
    bathrooms: 2,
    symbol: 2,
    price: 1450,
    lookingFor: 'rent',
  },
  {
    id: 4,
    type: 'flat',
    location: 'New York',
    title: 'Mochi House',
    image: 'house4',
    bedrooms: 4,
    bathrooms: 2,
    symbol: 2,
    price: 2500,
    lookingFor: 'let',
  },
  {
    id: 5,
    type: 'flat',
    location: 'Las Vegas',
    title: 'Mickey House',
    image: 'house1',
    bedrooms: 4,
    bathrooms: 2,
    symbol: 2,
    price: 1450000,
    lookingFor: 'buy',
  },
  {
    id: 6,
    type: 'holiday home',
    location: 'Michigan',
    title: 'Holiday House',
    image: 'house6',
    bedrooms: 4,
    bathrooms: 2,
    symbol: 2,
    price: 4500,
    lookingFor: 'rent',
  },
];

const FilterSection = (props: any) => {
  const [lookingFor, setLookingFor] = useState(' ');
  const lookingForFilterHandler = (selectedLookingFor: any) => {
    setLookingFor(selectedLookingFor);
  };

  const [location, setLocation] = useState(' ');
  const locationFilterHandler = (selectedLocation: any) => {
    setLocation(selectedLocation);
  };
  const [propertyType, setPropertyType] = useState(' ');
  const propertyTypeFilterHandler = (selectedPropertyType: any) => {
    setPropertyType(selectedPropertyType);
  };
  const [price, setPrice] = useState(' ');
  const priceFilterHandler = (selectedPrice: any) => {
    setPrice(selectedPrice);
  };
  return (
    <div className="filterSection__wrapper">
      <Heading title={`Find your next place to live`} />
      <div className="container-fluid col-12 ">
        <div className="filterSection__columns row ">
          <div className="col-3 col-xs-12 grey-border">
            <LookingForFilter
              selected={lookingFor}
              onChangeFilter={lookingForFilterHandler}
            />
          </div>
          <div className="col-3 col-xs-12 grey-border">
            <LocationFilter
              selected={location}
              onChangeFilter={locationFilterHandler}
            />
          </div>
          <div className="col-3 col-xs-12 grey-border">
            <PropertyTypeFilter
              selected={propertyType}
              onChangeFilter={propertyTypeFilterHandler}
            />
          </div>
          <div className="col-3 col-xs-12">
            <PriceFilter selected={price} onChangeFilter={priceFilterHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
