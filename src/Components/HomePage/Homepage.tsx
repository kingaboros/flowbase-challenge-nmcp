import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import Header from '../Header/Header';
import Listings from '../Listings/Listings';
import FilterSection from '../FilterSection/FilterSection';
import CenteredParagraph from '../Paragraph/CenteredParagraph';
import Testimonials from '../Testimonials/Testimonials';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import Footer from '../Footer/Footer';

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
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
