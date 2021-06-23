import React from 'react';
import Paragraph from '../../components/Paragraph/Paragraph';
import Header from '../../components/Header/Header';
import Listings from '../../components/Listings/Listings';
import FilterSection from '../../components/Filters/FilterSection';
import CenteredParagraph from '../../components/Paragraph/CenteredParagraph';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';

import images from '../../themes/images';

const Homepage = (props: any) => {
  return (
    <div>
      <Header />
      <Listings />
      <Paragraph
        paragraphClass={'row'}
        imgOrientation={images.paragraphImg}
        imgStyle={'paragraphImg'}
        descriptionStyle={'paragraphDescriptionWrapper'}
      />
      <FilterSection />
      <Paragraph
        paragraphClass={`${'row'} ${'flex-row-reverse'}`}
        imgOrientation={images.paragraphImgReverse}
        imgStyle={'paragraphImgReverse'}
        descriptionStyle={'paragraphDescriptionWrapperReverse'}
      />
      <CenteredParagraph />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
