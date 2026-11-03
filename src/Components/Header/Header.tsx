import React, { FC } from "react";
import { generatePDF } from "../../functions";
import pdf from "../../assets/pdf.svg";
import { HeaderStyled } from "./HeaderStyled";

interface HeaderProps {
  pageModes?: any;
  setPageMode: (mode: {}) => void;
  colorThemeDisplay: object[];
  setColorTheme: (theme: any) => void;
  showSign: boolean;
  setShowSign: (e: boolean) => void;
}

const Header: FC<HeaderProps> = ({
  pageModes,
  setPageMode,
  colorThemeDisplay,
  setColorTheme,
  showSign,
  setShowSign,
}) => {
  console.log(showSign);

  return (
    <HeaderStyled showSign={showSign}>
      <div className="modeButtonsRow">
        {pageModes?.map((mode) => (
          <button
            key={mode}
            className="modeButtons"
            onClick={() => setPageMode(mode)}
          >
            {mode}
          </button>
        ))}
      </div>
      <div className="colors">
        {colorThemeDisplay.map((theme: { bubble: any; name: React.Key }) => (
          <span
            style={{ backgroundColor: theme?.bubble }}
            onClick={() => {
              setColorTheme(theme.name);
            }}
            key={theme.name}
          />
        ))}
      </div>
      <button onClick={generatePDF} className="pdfButton">
        <img src={pdf} alt="Download PDF" />
      </button>

      <button className="showSign" onClick={() => setShowSign(!showSign)}>
        Show Sign
      </button>
    </HeaderStyled>
  );
};

export default Header;
