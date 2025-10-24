
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import CtaAreaHomeOne from '../homes/multi-page/home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import ContactArea from './ContactArea';
import GoogleMap from './GoogleMap';

const Contact = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb page_title='Contact' title='Contact' />
        <ContactArea />
        <GoogleMap />
        <CtaAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default Contact;