import { AppStyled } from "./AppStyled";
import { colorThemeDisplay, colorThemes } from "./data/colorThemes";
import pdf from "./pdf.svg";
import useInputs from "./hooks/useInputs";
import useBackgroundImage from "./hooks/useBackgroundImage";
import { generatePDF } from "./functions";
import Page from "./Components/Page";
import Tools from "./Components/Tools";

function App() {
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
    { placeholder: "Main Title", action: setTitle },
    { placeholder: "Image URL", action: setTopImage },
    { placeholder: "Info and Advice Title", action: setInfoAndAdviceTitle },
    {
      placeholder: "Info and Advice Text",
      action: setInfoSection,
      fontAction: setInfoSectionFontSize,
      fontValue: infoSectionFontSize,
      type: "textarea",
    },
    { placeholder: "Top Tip Title", action: setTipTitle },
    {
      placeholder: "Top Tip Text",
      action: setTipText,
      fontAction: setTipSectionFontSize,
      fontValue: tipSectionFontSize,
      type: "textarea",
    },
  ];

  return (
    <AppStyled
      theme={colorThemes[colorTheme]}
      image={topImage}
      tipSize={tipSectionFontSize}
      infoSize={infoSectionFontSize}
      backgroundPosition={backgroundPosition}
      isDragging={isDragging}
    >
      <button onClick={generatePDF}>
        <img src={pdf} alt="downloadPDF" />
      </button>

      <Tools
        colorThemeDisplay={colorThemeDisplay}
        setColorTheme={setColorTheme}
        inputs={inputs}
      />

      <Page
        title={title}
        handleMouseDown={handleMouseDown}
        handleMouseMove={handleMouseMove}
        handleMouseUp={handleMouseUp}
        infoAndAdviceTitle={infoAndAdviceTitle}
        infoSection={infoSection}
        tipTitle={tipTitle}
        tipText={tipText}
      />
    </AppStyled>
  );
}

export default App;
