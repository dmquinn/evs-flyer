import React from "react";
import defaults from "../../data/defaultValues.json";
import { ProgramPageStyled } from "./ProgramPageStyled";
import sportyDog from "../../assets/sportyDog2.svg";
const ProgramPage = ({ handleFocus, fontSizes, theme }) => {
  return (
    <ProgramPageStyled theme={theme} fontSizes={fontSizes}>
      <img alt="sportyDog" src={sportyDog} className="sportyDog" />
      <h1
        contentEditable
        className="programTitle"
        onClick={() => handleFocus("programTitle")}
      >
        {defaults.program.title}
      </h1>
      <div
        className="programInfo"
        contentEditable
        dangerouslySetInnerHTML={{
          __html: defaults.program.infoText,
        }}
        onClick={() => handleFocus("programInfo")}
      />
    </ProgramPageStyled>
  );
};

export default ProgramPage;
