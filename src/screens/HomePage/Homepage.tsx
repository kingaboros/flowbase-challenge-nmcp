import React from 'react';
import Paragraph from '../../Components/Paragraph/Paragraph';
import Header from '../../Components/Header/Header';
import Listings from '../../Components/Listings/Listings';
import FilterSection from '../../Components/FilterSection/FilterSection';
import CenteredParagraph from '../../Components/Paragraph/CenteredParagraph';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Footer from '../../Components/Footer/Footer';

import img1 from '../../Images/Content-Image.png';
import img2 from '../../Images/Content-Image2.png';

const Homepage = (props: any) => {
  return (
    <div>
      <Header />
      <Listings />
      <Paragraph
        paragraphClass={'row'}
        imgOrientation={img1}
        imgStyle={'paragraph__img'}
        descriptionStyle={'col-md-6 col-12 paragraph__description_wrapper'}
      />
      {/* <FilterSection /> */}
      {/*
      <Paragraph
        paragraphClass={'row' + ' ' + 'flex-row-reverse'}
        imgOrientation={img2}
        imgStyle={'paragraph__img-reverse'}
        descriptionStyle={
          'col-md-6 col-12 paragraph__description_wrapper_reverse'
        }
      />
      <CenteredParagraph />
      <Testimonials />
      <Footer /> */}
    </div>
  );
};

export default Homepage;
