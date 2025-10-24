

import Blog from '@/components/blogs/blog';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Blog - Finbest - Banking and Finance React Next js Template",
}

const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;