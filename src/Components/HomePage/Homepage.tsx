import React from 'react';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Header from '../Header/Header';
import Listings from '../Listings/Listings';
import FilterSection from '../FilterSection/FilterSection';
import Properties from '../Properties/Properties';
import CenteredParagraph from '../Paragraph/CenteredParagraph';

const Homepage = (props: any) => {
  return (
    <div>
      <Header />
      <Listings />
      <Paragraph
        paragraphClass={
          'paragraph__wrapper' +
          ' ' +
          'container-fluid' +
          ' ' +
          'col-12' +
          ' ' +
          'd-flex' +
          ' ' +
          'flex-row'
        }
      />
      <FilterSection />
      <Paragraph
        paragraphClass={
          'paragraph__wrapper' +
          ' ' +
          'container-fluid' +
          ' ' +
          'col-12' +
          ' ' +
          'd-flex' +
          ' ' +
          'flex-row-reverse'
        }
      />
      <CenteredParagraph />
    </div>
  );
};

export default Homepage;
