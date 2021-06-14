import React from 'react';
import Paragraph from '../../Components/Paragraph/Paragraph';
import Header from '../../Components/Header/Header';
import Listings from '../../Components/Listings/Listings';
import FilterSection from '../../Components/FilterSection/FilterSection';
import CenteredParagraph from '../../Components/Paragraph/CenteredParagraph';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Footer from '../../Components/Footer/Footer';

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
