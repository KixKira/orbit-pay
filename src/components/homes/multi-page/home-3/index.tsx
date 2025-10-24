

import React from 'react';
import Headerthree from '@/layouts/headers/Headerthree';
import HeroAreaHomeThree from './HeroAreaHomeThree';
import AboutAreaHomeThree from './AboutAreaHomeThree';
import ServiceAreaHomeThree from './ServiceAreaHomeThree';
import ProjectAreaHomeThree from './ProjectAreaHomeThree';
import SupportAreaHomeThree from './SupportAreaHomeThree';
import TestimonialAreaHomeThree from './TestimonialAreaHomeThree';
import TeamAreaHomeThree from './TeamAreaHomeThree';
import CounterAreaHomeThree from './CounterAreaHomeThree';
import ContactAreaHomeThree from './ContactAreaHomeThree';
import ProcessAreaHomeThree from './ProcessAreaHomeThree';
import BlogAreaHomeThree from './BlogAreaHomeThree';
import FooterThree from '@/layouts/footers/FooterThree';
 


const HomeThree = () => {
  return (
    <>
      <Headerthree />
      <main>
        <HeroAreaHomeThree />
        <AboutAreaHomeThree />
        <ServiceAreaHomeThree />
        <ProjectAreaHomeThree />
        <SupportAreaHomeThree />
        <TestimonialAreaHomeThree />
        <TeamAreaHomeThree />
        <CounterAreaHomeThree />
        <ContactAreaHomeThree />
        <ProcessAreaHomeThree />
        <BlogAreaHomeThree />
      </main>
      <FooterThree />
    </>
  );
};

export default HomeThree;