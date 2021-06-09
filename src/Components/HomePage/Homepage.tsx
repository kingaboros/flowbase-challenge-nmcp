import React from 'react';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Header from '../Header/Header';
import Listings from '../Listings/Listings';
import FilterSection from '../FilterSection/FilterSection';

const Homepage = () => {
  return (
    <div>
      <Header />
      <Listings />
      <Heading title={`You're in good hands`} />
      <Paragraph />
      <FilterSection />
    </div>
  );
};

export default Homepage;
