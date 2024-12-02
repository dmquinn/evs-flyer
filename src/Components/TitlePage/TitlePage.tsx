import React, { FC } from "react";
import { TitlePageStyled } from "./TitlePageStyled";

interface TitlePageProps {
  title: string;
  mainImage: string;
  infoSection: string;
  theme: { page: string; title: string };
}
const TitlePage: FC<TitlePageProps> = ({
  title,
  mainImage,
  theme,
  infoSection,
}) => {
  return (
    <TitlePageStyled title={title} image={mainImage} theme={theme}>
      <div className="page">
        <h1>{title}</h1>
        <img src={mainImage} alt="topImage" className="titlePageImage" />
      </div>
      <div
        className="infoSection"
        dangerouslySetInnerHTML={{ __html: infoSection }}
      />
    </TitlePageStyled>
  );
};

export default TitlePage;
