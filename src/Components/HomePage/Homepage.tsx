import React from 'react';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Header from '../Header/Header';
import Listings from '../Listings/Listings';
import FilterSection from '../FilterSection/FilterSection';
import Properties from '../Properties/Properties';

const Homepage = (props: any) => {
  return (
    <div>
      <Header />
      <Listings />
      <Paragraph />
      <FilterSection />
    </div>
  );
};

export default Homepage;
