
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import ServiceDetailsArea from './ServiceDetailsArea';
import CtaAreaHomeOne from '../homes/multi-page/home/CtaAreaHomeOne';

const ServicesDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb page_title='Services Details' title='Services Details' />
        <ServiceDetailsArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default ServicesDetails;


