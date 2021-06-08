import React from 'react';
import Paragraph from '../Global/Paragraph/Paragraph';
import Header from '../Header/Header';
import Listings from '../Listings/Listings';

const Homepage = () => {
  return (
    <div>
      <Header />
      <Listings />
      <Paragraph />
    </div>
  );
};

export default Homepage;
