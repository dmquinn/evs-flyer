import { FC, useRef, useState } from "react";
import { PageContainerStyled } from "./PageContainerStyled";
import { colorThemeDisplay, colorThemes } from "../../data/colorThemes";
import useInputs from "../../hooks/useInputs";
import useBackgroundImage from "../../hooks/useBackgroundImage";
import TitlePage from "../TitlePage/TitlePage";
import LeafletPage from "../LeafletPage/LeafletPage";
import SummaryPage from "../SummaryPage/SummaryPage";
import Header from "../Header/Header";
import ProgramPage from "../ProgramPage/ProgramPage";
import useFontSize from "../../hooks/useFontSize";

const pageModes = ["leaflet", "title", "summary", "program"] as const;

const PageContainer: FC = () => {
  const [pageMode, setPageMode] = useState<
    "leaflet" | "title" | "summary" | "program"
  >("leaflet");
  const { fontSizes, fontSelector, setFontSizes, handleFocus } = useFontSize();

  const {
    colorTheme,
    setColorTheme,
    topImage,
    setTopImage,
    imageStyle,
    setImageStyle,
  } = useInputs(pageMode);

  const {
    backgroundPosition,
    isDragging,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  } = useBackgroundImage();

  const renderPage = () => {
    const sharedProps = {
      theme: colorThemes[colorTheme],
      mainImage: topImage,
      backgroundPosition: backgroundPosition,
      isDragging: isDragging,
      handleMouseDown,
      handleMouseMove,
      handleMouseUp,
      handleFocus,
      fontSizes,
    };

    const pages = {
      program: (
        <div className="page">
          <ProgramPage {...sharedProps} />
        </div>
      ),
      summary: (
        <div className="page">
          <SummaryPage {...sharedProps} />
        </div>
      ),
      title: (
        <div className="page">
          <TitlePage {...sharedProps} imageStyle={imageStyle} />
        </div>
      ),
      leaflet: (
        <div className="page">
          <LeafletPage {...sharedProps} />{" "}
        </div>
      ),
    };

    return pages[pageMode];
  };
  return (
    <PageContainerStyled theme={colorThemes[colorTheme]}>
      <div className="tools">
        {fontSelector && (
          <div className="fontSelector">
            <label htmlFor="fontSelector">font size:</label>
            <input
              id="fontSelector"
              value={fontSizes[fontSelector]}
              type="number"
              onChange={(e) =>
                setFontSizes({ ...fontSizes, [fontSelector]: e.target.value })
              }
            />
          </div>
        )}
        <input
          placeholder="image url"
          onChange={(e) => setTopImage(e.target.value)}
          className="imgInput"
        />
        <div className="switchContainer">
          <p>Image Style</p>
          <label className="toggle-switch">
            <input
              type="checkbox"
              onChange={() => setImageStyle(!imageStyle)}
            />
            <span className="switch" />
          </label>
        </div>
      </div>
      <Header
        setPageMode={setPageMode}
        pageModes={pageModes}
        colorThemeDisplay={colorThemeDisplay}
        setColorTheme={setColorTheme}
      />
      {renderPage()}
    </PageContainerStyled>
  );
};
export default PageContainer;
