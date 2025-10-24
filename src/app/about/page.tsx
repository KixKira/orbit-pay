
import About from '@/components/about';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "About - Finbest - Banking and Finance React Next js Template",
};



const index = () => {
  return (
    <Wrapper>
      <About/>
    </Wrapper>
  );
};

export default index;