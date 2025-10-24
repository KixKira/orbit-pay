

import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import CtaAreaHomeOne from '../homes/multi-page/home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import FaqArea from './FaqArea';

const FAQ = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb page_title='FAQ' title='FAQ' />
        <FaqArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default FAQ;