import React, { FC } from "react";
import { SummaryPageStyled } from "./SummaryPageStyled";
import medal from "../../assets/medal.svg";
import defaults from "../../data/defaultValues.json";

interface SummaryPageProps {
  handleMouseDown: (e: any) => void;
  handleMouseMove: (e: any) => void;
  handleMouseUp: (e: any) => void;
  mainImage: string;
  theme?: { name?: string; page?: string; title?: string };
  isDragging: boolean;
  backgroundPosition: { x: number; y: number };
  handleFocus: (e: string) => void;
  fontSizes: any;
}

const SummaryPage: FC<SummaryPageProps> = ({
  theme,
  mainImage,
  backgroundPosition,
  isDragging,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  handleFocus,
  fontSizes,
}) => {
  return (
    <SummaryPageStyled
      fontSizes={fontSizes}
      //@ts-ignore
      theme={theme}
      image={mainImage}
      backgroundPosition={backgroundPosition}
      isDragging={isDragging}
    >
      <div className="row">
        <div
          className="summaryTitle"
          contentEditable
          onClick={() => handleFocus("summaryTitle")}
          dangerouslySetInnerHTML={{ __html: defaults.summary.title }}
        />
        <div
          className="topImageContainer"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
        <img src={medal} alt="medal" className="medal" />
      </div>
      <div
        className="summaryStrengthsText"
        contentEditable
        onClick={() => handleFocus("summaryStrengthsText")}
        dangerouslySetInnerHTML={{ __html: defaults.summary.infoText }}
      />
      <div className="row lower">
        <div
          className="summaryTitle right"
          contentEditable
          onClick={() => handleFocus("summaryTitle")}
          dangerouslySetInnerHTML={{ __html: defaults.summary.subTitle }}
        />
      </div>
      <div
        className="summaryIssuesText"
        dangerouslySetInnerHTML={{ __html: defaults.summary.infoText }}
        contentEditable
        onClick={() => handleFocus("summaryIssuesText")}
      />
    </SummaryPageStyled>
  );
};

export default SummaryPage;
