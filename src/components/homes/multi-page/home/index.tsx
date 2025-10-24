

import React from 'react'; 
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroAreaHomeOne from './HeroAreaHomeOne';
import AboutAreaHomeOne from './AboutAreaHomeOne';
import ServiceAreaHomeOne from './ServiceAreaHomeOne';
import ProcessAreaHomeOne from './ProcessAreaHomeOne';
import BrandAreaHomeOne from './BrandAreaHomeOne';
import ProjectAreaHomeOne from './ProjectAreaHomeOne';
import FaqAreaHomeOne from './FaqAreaHomeOne';
import TeamAreaHomeOne from './TeamAreaHomeOne';
import TestimonialAreaHomeOne from './TestimonialAreaHomeOne';
import BlogAreaHomeOne from './BlogAreaHomeOne';
import CtaAreaHomeOne from './CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroAreaHomeOne />
        <AboutAreaHomeOne />
        <ServiceAreaHomeOne />
        <BrandAreaHomeOne />
        <ProjectAreaHomeOne />
        <ProcessAreaHomeOne />
        <FaqAreaHomeOne />
        <TeamAreaHomeOne />
        <TestimonialAreaHomeOne />
        <BlogAreaHomeOne />
        <CtaAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;