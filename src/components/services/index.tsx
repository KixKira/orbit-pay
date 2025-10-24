

import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import ServiceArea from './ServiceArea';
import CtaAreaHomeOne from '../homes/multi-page/home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Services = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb page_title='Services' title='Services' />
        <ServiceArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default Services;