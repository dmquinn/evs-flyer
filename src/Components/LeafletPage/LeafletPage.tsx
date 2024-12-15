import React from "react";
import defaults from "../../data/defaultValues.json";
import logo from "../../assets/logo.svg";
import grass from "../../assets/grass.svg";
import sign from "../../assets/sign.svg";
import lightbulb from "../../assets/lightbulb.svg";
import { LeafletPageStyled } from "./LeafletPageStyled";
const LeafletPage = ({
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  theme,
  mainImage,
  backgroundPosition,
  isDragging,
  handleFocus,
  fontSizes,
}) => {
  return (
    <LeafletPageStyled
      theme={theme}
      image={mainImage}
      backgroundPosition={backgroundPosition}
      isDragging={isDragging}
      fontSizes={fontSizes}
    >
      <div
        className="leafletTitleBubble"
        contentEditable
        onClick={() => handleFocus("leafletTitleBubble")}
      >
        {defaults.leaflet.mainTitle}
      </div>
      <div
        className="topImageContainer"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></div>
      <div
        className="leafletInfoAndAdviceTitle"
        contentEditable
        onClick={() => handleFocus("leafletInfoAndAdviceTitle")}
      >
        {defaults.leaflet.infoTitle}
      </div>
      <div
        className="leafletInfoSection"
        contentEditable
        dangerouslySetInnerHTML={{ __html: defaults.leaflet.infoText }}
        onClick={() => handleFocus("leafletInfoSection")}
      />
      <div
        className="leafletTopTipTitle"
        contentEditable
        onClick={() => handleFocus("leafletTopTipTitle")}
      >
        {defaults.leaflet.tipTitle}
      </div>
      <div
        contentEditable
        className="leafletTopTipSection"
        dangerouslySetInnerHTML={{ __html: defaults.leaflet.tipText }}
        onClick={() => handleFocus("leafletTopTipSection")}
      />
      <img src={lightbulb} className="lightbulb" alt="lightbulb" />
      <img src={logo} className="logo" alt="logo" />
      <img src={grass} className="grass" alt="grass" />
      <img src={sign} className="sign" alt="sign" />
    </LeafletPageStyled>
  );
};

export default LeafletPage;
