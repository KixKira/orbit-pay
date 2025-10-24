
import BlogDetails from '@/components/blogs/blog-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Blog Details - Finbest - Banking and Finance React Next js Template',
}

const index = () => {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  );
};

export default index;