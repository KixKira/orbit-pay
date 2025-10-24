import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroAreaHomeOne from "../../multi-page/home/HeroAreaHomeOne";
import AboutAreaHomeOne from "../../multi-page/home/AboutAreaHomeOne";
import ServiceAreaHomeOne from "../../multi-page/home/ServiceAreaHomeOne";
import BrandAreaHomeOne from "../../multi-page/home/BrandAreaHomeOne";
import ProjectAreaHomeOne from "../../multi-page/home/ProjectAreaHomeOne";
import ProcessAreaHomeOne from "../../multi-page/home/ProcessAreaHomeOne";
import FaqAreaHomeOne from "../../multi-page/home/FaqAreaHomeOne";
import TeamAreaHomeOne from "../../multi-page/home/TeamAreaHomeOne";
import TestimonialAreaHomeOne from "../../multi-page/home/TestimonialAreaHomeOne";
import BlogAreaHomeOne from "../../multi-page/home/BlogAreaHomeOne";
import CtaAreaHomeOne from "../../multi-page/home/CtaAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import ContactArea from "@/components/contact/ContactArea";

const OnePageHomeOne = () => {
  return (
    <>
      <HeaderOne onePageHomeOne={true} />
      <main>
        <HeroAreaHomeOne />
        <AboutAreaHomeOne />
        <ServiceAreaHomeOne />
        {/* <BrandAreaHomeOne /> */}
        {/* <ProjectAreaHomeOne /> */}
        <ProcessAreaHomeOne />
        <FaqAreaHomeOne />
        {/* <TeamAreaHomeOne /> */}
        <TestimonialAreaHomeOne />
        {/* <BlogAreaHomeOne style={true} /> */}
        <ContactArea style={true} />
        {/* <CtaAreaHomeOne /> */}
      </main>
      <FooterOne />
    </>
  );
};

export default OnePageHomeOne;
