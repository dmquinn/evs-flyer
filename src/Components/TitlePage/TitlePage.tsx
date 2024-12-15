import React, { FC } from "react";
import { TitlePageStyled } from "./TitlePageStyled";
import defaults from "../../data/defaultValues.json";
import border from "../../assets/border.svg";
import bordergreen from "../../assets/bordergreen.svg";
import logo from "../../assets/logo.svg";

interface TitlePageProps {
  handleMouseDown: (e: any) => void;
  handleMouseMove: (e: any) => void;
  handleMouseUp: (e: any) => void;
  mainImage: string;
  theme: { name: string; page: string; title: string };
  imageStyle: boolean;
  isDragging: boolean;
  backgroundPosition: { x: number; y: number };
}
const TitlePage: FC<TitlePageProps> = ({
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  mainImage,
  theme,
  imageStyle,
  isDragging,
  backgroundPosition,
}) => {
  return (
    <TitlePageStyled
      image={mainImage}
      theme={theme}
      imageStyle={imageStyle}
      isDragging={isDragging}
      backgroundPosition={backgroundPosition}
    >
      <img
        src={
          theme.name === "dimGreen" || theme.name === "lightBlue"
            ? bordergreen
            : border
        }
        alt="border"
        className="border"
      />
      <img src={logo} alt="logo" className="logo" />

      <div
        className="titlePageImage"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      <div className="dogAndHumanName">
        <h2>
          Dog Name: <span contentEditable>{defaults.title.dogName}</span>
        </h2>
        <h2>
          Human Name(s): <span contentEditable>{defaults.title.humanName}</span>
        </h2>
      </div>
    </TitlePageStyled>
  );
};

export default TitlePage;
