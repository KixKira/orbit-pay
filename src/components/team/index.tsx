
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import TeamArea from './TeamArea';
import CtaAreaHomeOne from '../homes/multi-page/home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Team = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb page_title='Team' title='Team' />
        <TeamArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default Team;