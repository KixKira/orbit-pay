

import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/Breadcrumb';
import ProjectDetailsArea from './ProjectDetailsArea';
import CtaAreaHomeOne from '../homes/multi-page/home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const ProjectDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb page_title='Project Details' title='Project Details' />
        <ProjectDetailsArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default ProjectDetails;