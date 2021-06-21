import React from 'react';
import Paragraph from '../../components/Paragraph/Paragraph';
import Header from '../../components/Header/Header';
import Listings from '../../components/Listings/Listings';
import FilterSection from '../../components/Filters/FilterSection';
import CenteredParagraph from '../../components/Paragraph/CenteredParagraph';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';

import img1 from '../../images/Content-Image.png';
import img2 from '../../images/Content-Image2.png';

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
      <FilterSection />
      <Paragraph
        paragraphClass={`${'row'} ${'flex-row-reverse'}`}
        imgOrientation={img2}
        imgStyle={'paragraph__img-reverse'}
        descriptionStyle={
          'col-md-6 col-12 paragraph__description_wrapper_reverse'
        }
      />
      <CenteredParagraph />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
