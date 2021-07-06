import React, { useEffect } from 'react';
import Paragraph from '../../components/Paragraph/Paragraph';
import Header from '../../components/Header/Header';
import Listings from '../../components/Listings/Listings';
import FilterSection from '../../components/Filters/FilterSection';
import CenteredParagraph from '../../components/Paragraph/CenteredParagraph';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';

import images from '../../themes/images';

import * as paragraph from '../../components/Paragraph/Paragraph.module.scss';
import { requestApiData } from '../../redux/actions/actions';
import { connect } from 'react-redux';
import { updateReturn } from 'typescript';

const Homepage = (props: any) => {
  useEffect(() => {
    props.fetchData();
  }, []);
  useEffect(() => {
    console.log(props.rooms);
  }, [props]);
  return (
    <div>
      <Header />
      <Listings />
      <Paragraph
        paragraphClass={paragraph.row}
        imgOrientation={images.paragraphImg}
        imgStyle={paragraph.paragraphImg}
        descriptionStyle={paragraph.paragraphDescriptionWrapper}
      />
      <FilterSection />
      <Paragraph
        paragraphClass={paragraph.paragraphReverse}
        imgOrientation={images.paragraphImgReverse}
        imgStyle={paragraph.paragraphImgReverse}
        descriptionStyle={paragraph.paragraphDescriptionWrapperReverse}
      />
      <CenteredParagraph />
      <Testimonials />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return { rooms: state.rooms };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: () => dispatch(requestApiData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
