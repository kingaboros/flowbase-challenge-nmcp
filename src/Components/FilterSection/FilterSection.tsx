import React, { useState } from 'react';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import Heading from '../Heading/Heading';
import Properties from '../Properties/Properties';

import LookingForFilter from '../Filters/LookingForFilter';
import LocationFilter from '../Filters/LocationFilter';
import PropertyTypeFilter from '../Filters/PropertyTypeFilter';
import PriceFilter from '../Filters/PriceFilter';

import '../FilterSection/FilterSection.scss';
import house1 from '../../Images/house1.png';
import house2 from '../../Images/house2.png';
import house3 from '../../Images/house3.png';
import house4 from '../../Images/house4.png';
import house6 from '../../Images/house6.png';

const properties = [
  {
    id: 1,
    type: 'Flat',
    location: 'New York',
    title: 'Malto House',
    image: house1,
    bedrooms: 4,
    bathrooms: 2,
    symbol: 2,
    price: 2000,
    lookingFor: 'rent',
  },
  {
    id: 2,
    type: 'House',
    location: 'Las Vegas',
    title: 'Vegas House',
    image: house2,
    bedrooms: 4,
    bathrooms: 2,
    symbol: 2,
    price: 3500,
    lookingFor: 'let',
  },
  {
    id: 3,
    type: 'Bungalow',
    location: 'Michigan',
    title: 'Mich House',
    image: house3,
    bedrooms: 4,
    bathrooms: 2,
    symbol: 2,
    price: 1450,
    lookingFor: 'rent',
  },
  {
    id: 4,
    type: 'Flat',
    location: 'New York',
    title: 'Mochi House',
    image: house4,
    bedrooms: 4,
    bathrooms: 2,
    symbol: 2,
    price: 2500,
    lookingFor: 'let',
  },
  {
    id: 5,
    type: 'Flat',
    location: 'Las Vegas',
    title: 'Mickey House',
    image: house1,
    bedrooms: 4,
    bathrooms: 2,
    symbol: 2,
    price: 1450000,
    lookingFor: 'buy',
  },
  {
    id: 6,
    type: 'Holiday Home',
    location: 'Michigan',
    title: 'Holiday House',
    image: house6,
    bedrooms: 4,
    bathrooms: 2,
    symbol: 2,
    price: 4500,
    lookingFor: 'rent',
  },
];

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

  let filteredProperties = properties.filter((properties: any) => {
    return properties.lookingFor === lookingFor || lookingFor === 'all';
  });

  return (
    <div className="filter-section__wrapper">
      <HorizontalLine lineStyle={'horizontal-line'} />
      <Heading
        headingStyle={'heading__title'}
        title={`Find your next place to live`}
      />
      <div className="container-fluid col-12 ">
        <div className="row filter-section__columns ">
          <div className="col-3 col-xs-12 grey-border filter__control">
            <LookingForFilter
              selected={lookingFor}
              onChangeFilter={lookingForFilterHandler}
            />
          </div>
          <div className="col-3 col-xs-12 grey-border filter__control">
            <LocationFilter
              selected={location}
              onChangeFilter={locationFilterHandler}
            />
          </div>
          <div className="col-3 col-xs-12 grey-border filter__control">
            <PropertyTypeFilter
              selected={propertyType}
              onChangeFilter={propertyTypeFilterHandler}
            />
          </div>
          <div className="col-3 col-xs-12 filter__control">
            <PriceFilter selected={price} onChangeFilter={priceFilterHandler} />
          </div>
        </div>
      </div>
      <div>
        <div className="filter-section__results">
          <div className="row">
            {filteredProperties.map((properties: any) => (
              <Properties
                image={properties.image}
                title={properties.title}
                bedrooms={properties.bedrooms}
                bathrooms={properties.bathrooms}
                symbol={properties.symbol}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
