import React from 'react';
import ArrowBtn from '../Global/ArrowBtn/ArrowBtn';
import Heading from '../Global/Heading/Heading';
import Paragraph from '../Global/Paragraph/Paragraph';
import Header from '../Header/Header';
import Listings from '../Listings/Listings';

const Homepage = () => {
  return (
    <div>
      <Header />
      <Listings />
      <Heading title={`You're in good hands`} />
      <Paragraph />
    </div>
  );
};

export default Homepage;
