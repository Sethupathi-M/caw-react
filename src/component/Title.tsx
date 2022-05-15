import React from "react";
import { Helmet } from "react-helmet";

interface TitleProps {
  documentTitle: string;
}

function Title({ documentTitle }: TitleProps) {
  return (
    <Helmet>
      <title>{documentTitle}</title>
    </Helmet>
  );
}

export default Title;
