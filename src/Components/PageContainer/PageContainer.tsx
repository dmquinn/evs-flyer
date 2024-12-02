import { FC, useRef, useState } from "react";
import { PageContainerStyled } from "./PageContainerStyled";
import { colorThemeDisplay, colorThemes } from "../../data/colorThemes";
import pdf from "../../assets/pdf.svg";
import useInputs from "../../hooks/useInputs";
import useBackgroundImage from "../../hooks/useBackgroundImage";
import { generatePDF } from "../../functions";
import Tools from "../Tools";
import { TextTools } from "../TextTools";
import TablePage from "../TablePage";
import TitlePage from "../TitlePage/TitlePage";
import LeafletPage from "../LeafletPage/LeafletPage";

const pageModes = ["leaflet", "title", "table"] as const;

const PageContainer: FC = () => {
  const infoAdviceRef = useRef<HTMLDivElement | null>(null);
  const [pageMode, setPageMode] = useState<"leaflet" | "title" | "table">(
    "leaflet"
  );

  const {
    colorTheme,
    setColorTheme,
    title,
    setTitle,
    topImage,
    setTopImage,
    infoAndAdviceTitle,
    setInfoAndAdviceTitle,
    infoSection,
    tipSectionFontSize,
    setTipSectionFontSize,
    setInfoSection,
    infoSectionFontSize,
    setInfoSectionFontSize,
    tipTitle,
    setTipTitle,
    tipText,
    setTipText,
  } = useInputs();

  const {
    backgroundPosition,
    isDragging,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  } = useBackgroundImage();

  const inputs = [
    {
      placeholder: "Main Title",
      action: setTitle,
      showOn: ["leaflet", "title"],
    },
    {
      placeholder: "Image URL",
      action: setTopImage,
      showOn: ["leaflet", "title"],
    },
    {
      placeholder: "Info and Advice Title",
      action: setInfoAndAdviceTitle,
      showOn: ["leaflet"],
    },
    {
      placeholder: "Info and Advice Text",
      action: setInfoSection,
      fontAction: setInfoSectionFontSize,
      fontValue: infoSectionFontSize,
      type: "textarea",
      showOn: ["leaflet", "title"],
    },
    { placeholder: "Top Tip Title", action: setTipTitle, showOn: ["leaflet"] },
    {
      placeholder: "Top Tip Text",
      action: setTipText,
      fontAction: setTipSectionFontSize,
      fontValue: tipSectionFontSize,
      type: "textarea",
      showOn: ["leaflet"],
    },
  ];

  const highlightWord = () => {
    const subString = window?.getSelection()?.toString();
    if (!subString) return;

    const updatedText = infoSection.replace(
      subString,
      `<span class="highlighted">${subString}</span>`
    );

    setInfoSection(updatedText);
  };

  const renderPage = () => {
    const sharedProps = {
      title,
      theme: colorThemes[colorTheme],
      mainImage: topImage,
      infoSection,
    };

    const pages = {
      table: <TablePage />,
      title: <TitlePage {...sharedProps} />,
      leaflet: (
        <LeafletPage
          {...sharedProps}
          handleMouseDown={handleMouseDown}
          handleMouseMove={handleMouseMove}
          handleMouseUp={handleMouseUp}
          infoAndAdviceTitle={infoAndAdviceTitle}
          tipTitle={tipTitle}
          tipText={tipText}
          infoAdviceRef={infoAdviceRef}
          tipSize={tipSectionFontSize}
          infoSize={infoSectionFontSize}
          backgroundPosition={backgroundPosition}
          isDragging={isDragging}
        />
      ),
    };

    return pages[pageMode];
  };

  return (
    <PageContainerStyled theme={colorThemes[colorTheme]}>
      <div className="modeButtonsRow">
        {pageModes.map((mode) => (
          <button
            key={mode}
            className="modeButtons"
            onClick={() => setPageMode(mode)}
          >
            {mode}
          </button>
        ))}
      </div>
      <button onClick={generatePDF}>
        <img src={pdf} alt="Download PDF" />
      </button>
      <TextTools highlightWord={highlightWord} />
      <Tools
        colorThemeDisplay={colorThemeDisplay}
        setColorTheme={setColorTheme}
        inputs={inputs}
        pageMode={pageMode}
      />
      {renderPage()}
    </PageContainerStyled>
  );
};
export default PageContainer;
