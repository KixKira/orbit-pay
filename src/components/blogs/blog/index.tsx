

import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../../common/Breadcrumb';
import BlogPostboxArea from './BlogPostboxArea';
import CtaAreaHomeOne from '@/components/homes/multi-page/home/CtaAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Blog = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb page_title='Blog Classic' title='Blog Classic' />
        <BlogPostboxArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default Blog;