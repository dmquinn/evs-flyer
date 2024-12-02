import React from "react";
import logo from "../../assets/logo.svg";
import grass from "../../assets/grass.svg";
import sign from "../../assets/sign.svg";
import lightbulb from "../../assets/lightbulb.svg";
import { LeafletPageStyled } from "./LeafletPageStyled";
const LeafletPage = ({
  title,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  infoAndAdviceTitle,
  infoSection,
  tipTitle,
  tipText,
  infoAdviceRef,
  theme,
  mainImage,
  tipSize,
  infoSize,
  backgroundPosition,
  isDragging,
}) => {
  return (
    <LeafletPageStyled
      theme={theme}
      image={mainImage}
      tipSize={tipSize}
      infoSize={infoSize}
      backgroundPosition={backgroundPosition}
      isDragging={isDragging}
    >
      <div className="titleBubble">{title}</div>
      <div
        className="topImageContainer"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></div>
      <div className="infoAndAdviceTitle" ref={infoAdviceRef}>
        {infoAndAdviceTitle}
      </div>
      <div
        className="infoSection"
        dangerouslySetInnerHTML={{ __html: infoSection }}
      />
      <div className="topTipTitle">{tipTitle}</div>
      <div
        className="topTipSection"
        dangerouslySetInnerHTML={{ __html: tipText }}
      />
      <img src={lightbulb} className="lightbulb" alt="lightbulb" />
      <img src={logo} className="logo" alt="logo" />
      <img src={grass} className="grass" alt="grass" />
      <img src={sign} className="sign" alt="sign" />
    </LeafletPageStyled>
  );
};

export default LeafletPage;
