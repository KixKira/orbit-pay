

import Breadcrumb from '@/components/common/Breadcrumb';
import CtaAreaHomeOne from '@/components/homes/multi-page/home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import BlogDetailsPostBox from './BlogDetailsPostBox';

const BlogDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb page_title='Blog Details' title='Blog Details' />
        <BlogDetailsPostBox />
        <CtaAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default BlogDetails;