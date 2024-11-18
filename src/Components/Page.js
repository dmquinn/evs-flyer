import React from "react";
import logo from "../logo.svg";
import grass from "../grass.svg";
import sign from "../sign.svg";
import lightbulb from "../lightbulb.svg";
const Page = ({
  title,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  infoAndAdviceTitle,
  infoSection,
  tipTitle,
  tipText,
}) => {
  return (
    <div className="page">
      <div className="titleBubble">{title}</div>
      <div
        className="topImageContainer"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></div>
      <div className="infoAndAdviceTitle">{infoAndAdviceTitle}</div>
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
    </div>
  );
};

export default Page;
