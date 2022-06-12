import React from "react";
import { LoaderContainerStyle, SVGStyle } from "./loaderPage.style";

const LoaderPage = () => {
  return (
    <LoaderContainerStyle>
      <SVGStyle svg="twitter" size="VERY_BIG" />
    </LoaderContainerStyle>
  );
};

export default LoaderPage;
