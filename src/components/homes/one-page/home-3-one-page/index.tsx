

import Headerthree from '@/layouts/headers/Headerthree';
import React from 'react';
import HeroAreaHomeThree from '../../multi-page/home-3/HeroAreaHomeThree';
import AboutAreaHomeThree from '../../multi-page/home-3/AboutAreaHomeThree';
import ServiceAreaHomeThree from '../../multi-page/home-3/ServiceAreaHomeThree';
import ProjectAreaHomeThree from '../../multi-page/home-3/ProjectAreaHomeThree';
import SupportAreaHomeThree from '../../multi-page/home-3/SupportAreaHomeThree';
import TestimonialAreaHomeThree from '../../multi-page/home-3/TestimonialAreaHomeThree';
import TeamAreaHomeThree from '../../multi-page/home-3/TeamAreaHomeThree';
import CounterAreaHomeThree from '../../multi-page/home-3/CounterAreaHomeThree';
import ContactAreaHomeThree from '../../multi-page/home-3/ContactAreaHomeThree';
import ProcessAreaHomeThree from '../../multi-page/home-3/ProcessAreaHomeThree';
import BlogAreaHomeThree from '../../multi-page/home-3/BlogAreaHomeThree';
import FooterThree from '@/layouts/footers/FooterThree';

const OnePageHomeThree = () => {
  return (
    <>
      <Headerthree onePageHomeOne={true} />
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

export default OnePageHomeThree;