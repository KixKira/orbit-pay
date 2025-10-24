
import HeaderTwo from '@/layouts/headers/HeaderTwo';
import React from 'react';
import HeroAreaHomeTwo from '../../multi-page/home-2/HeroAreaHomeTwo';
import AboutAreaHomeTwo from '../../multi-page/home-2/AboutAreaHomeTwo';
import ServiceAreaHomeTwo from '../../multi-page/home-2/ServiceAreaHomeTwo';
import ProjectAreaHomeTwo from '../../multi-page/home-2/ProjectAreaHomeTwo';
import ProcessAreaHomeTwo from '../../multi-page/home-2/ProcessAreaHomeTwo';
import VideoAreaHomeTwo from '../../multi-page/home-2/VideoAreaHomeTwo';
import TeamAreaHomeTwo from '../../multi-page/home-2/TeamAreaHomeTwo'; 
import CounterAreaHomeTwo from '../../multi-page/home-2/CounterAreaHomeTwo';
import ContactAreaHomeTwo from '../../multi-page/home-2/ContactAreaHomeTwo';
import BlogAreaHomeTwo from '../../multi-page/home-2/BlogAreaHomeTwo';
import CtaAreaHomeTwo from '../../multi-page/home-2/CtaAreaHomeTwo';
import FooterTwo from '@/layouts/footers/FooterTwo';
import TestimonialAreaHomeTwo from '../../multi-page/home-2/TestimonialAreaHomeTwo';

const OnePageHomeTwo = () => {
  return (
    <>
      <HeaderTwo onePageHomeOne={true} />
      <main>
        <HeroAreaHomeTwo />
        <AboutAreaHomeTwo />
        <ServiceAreaHomeTwo />
        <ProjectAreaHomeTwo />
        <ProcessAreaHomeTwo />
        <VideoAreaHomeTwo />
        <TeamAreaHomeTwo />
        <TestimonialAreaHomeTwo />
        <CounterAreaHomeTwo />
        <ContactAreaHomeTwo />
        <BlogAreaHomeTwo />
        <CtaAreaHomeTwo />
      </main>
      <FooterTwo />
    </>
  );
};

export default OnePageHomeTwo;