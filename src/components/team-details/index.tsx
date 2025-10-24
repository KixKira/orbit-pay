
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import TeamDetailsArea from './TeamDetailsArea';
import CtaAreaHomeOne from '../homes/multi-page/home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const TeamDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb page_title='Team Details' title='Team Details' />
        <TeamDetailsArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default TeamDetails;