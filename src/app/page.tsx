import OnePageHomeOne from "@/components/homes/one-page/home-1-one-page";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title: "OrbitPay - Inicio",
};

const index = () => {
  return (
    <Wrapper>
      <OnePageHomeOne />
    </Wrapper>
  );
};

export default index;
