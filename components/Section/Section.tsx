import style from "components/Section/Section.module.scss";

import React from "react";

interface TextProps {
  children: React.ReactNode[];
}

const Section: React.FC<TextProps> = ({ children }) => {
  return <section className={style.wrapper}>{children}</section>;
};

export default Section;
