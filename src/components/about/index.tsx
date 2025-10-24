
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import AboutAreaHomeOne from '../homes/multi-page/home/AboutAreaHomeOne';
import FaqAreaHomeOne from '../homes/multi-page/home/FaqAreaHomeOne';
import ProcessAreaHomeOne from '../homes/multi-page/home/ProcessAreaHomeOne';
import TestimonialAreaHomeOne from '../homes/multi-page/home/TestimonialAreaHomeOne';
import TeamAreaHomeOne from '../homes/multi-page/home/TeamAreaHomeOne';
import CtaAreaHomeOne from '../homes/multi-page/home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const About = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb title="About Us" page_title="About Us" />
        <AboutAreaHomeOne />
        <FaqAreaHomeOne />
        <ProcessAreaHomeOne />
        <TestimonialAreaHomeOne />
        <TeamAreaHomeOne style={true} />
        <CtaAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default About;