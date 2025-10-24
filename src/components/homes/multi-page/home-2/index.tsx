


import HeaderTwo from '@/layouts/headers/HeaderTwo';
import React from 'react';
import HeroAreaHomeTwo from './HeroAreaHomeTwo';
import AboutAreaHomeTwo from './AboutAreaHomeTwo';
import ServiceAreaHomeTwo from './ServiceAreaHomeTwo';
import ProjectAreaHomeTwo from './ProjectAreaHomeTwo';
import ProcessAreaHomeTwo from './ProcessAreaHomeTwo';
import VideoAreaHomeTwo from './VideoAreaHomeTwo';
import TeamAreaHomeTwo from './TeamAreaHomeTwo'; 
import CounterAreaHomeTwo from './CounterAreaHomeTwo';
import ContactAreaHomeTwo from './ContactAreaHomeTwo';
import BlogAreaHomeTwo from './BlogAreaHomeTwo';
import CtaAreaHomeTwo from './CtaAreaHomeTwo';
import FooterTwo from '@/layouts/footers/FooterTwo';
import TestimonialAreaHomeTwo from './TestimonialAreaHomeTwo';

const HomeTwo = () => {
  return (
    <>
      <HeaderTwo />
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

export default HomeTwo;