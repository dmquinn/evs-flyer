import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { AppStyled } from "./AppStyled";
import { colorThemes } from "./colorThemes";
import logo from "./logo.svg";
import grass from "./grass.svg";
import sign from "./sign.svg";
import lightbulb from "./lightbulb.svg";
import pdf from "./pdf.svg";

function App() {
  const [colorTheme, setColorTheme] = useState("pinkish");
  const [title, setTitle] = useState("TORNADO TEDDY");
  const [topImage, setTopImage] = useState(
    "https://static.wixstatic.com/media/d4d1f4_aa0fc0b21c444ad8be19d3fd85d193eb~mv2.jpeg/v1/fill/w_640,h_480,fp_0.50_0.30,q_80,usm_1.20_1.00_0.01,enc_auto/d4d1f4_aa0fc0b21c444ad8be19d3fd85d193eb~mv2.jpeg"
  );
  const [infoAndAdviceTitle, setInfoAndAdviceTitle] =
    useState("INFO AND ADVICE");
  const [infoSection, setInfoSection] = useState(
    "Puppies can tip over from calm to over-threshold very quickly indeed - if not checked, they can really go berserk!</br></br>When your pup sees something that fixates them - really focuses their attention - let them look and wait to see if they will lose interest - remember this is HABITUATION.</br></br>If they don't lose interest - interrupt the dog's focus. Make yourself exciting,get some treats out.</br></br>Engage the puppy in a wee bit of training. This will help your dog's level of arousal (just excitement) to recede.</br></br>They can investigate the exciting thing IF APPROPRIATE but only when they are calm."
  );
  const [infoSectionFontSize, setInfoSectionFontSize] = useState(13);
  const [tipSectionFontSize, setTipSectionFontSize] = useState(13);

  const [tipTitle, setTipTitle] = useState("TOP TIP");
  const [tipText, setTipText] = useState(
    "An over-excited puppy will literally not be able to think/hear you/remember anything! That makes them vulnerable - and we don't want that!"
  );
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

  const colorThemeDisplay = [
    colorThemes.pinkish,
    colorThemes.lightBlue,
    colorThemes.cinematic,
    colorThemes.dimGreen,
  ];

  const generatePDF = () => {
    const pageElement = document.querySelector(".page");

    if (pageElement) {
      const options = {
        scale: 2,
        useCORS: true,
        logging: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: pageElement.scrollWidth,
        windowHeight: pageElement.scrollHeight,
      };

      html2canvas(pageElement, options).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        var imgWidth = pdf.internal.pageSize.getWidth();
        var imgHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("page-content.pdf");
      });
    }
  };
  console.log(infoSectionFontSize);
  return (
    <AppStyled
      theme={colorThemes[colorTheme]}
      image={topImage}
      tipSize={tipSectionFontSize}
      infoSize={infoSectionFontSize}
    >
      <button onClick={generatePDF}>
        <img src={pdf} alt="downloadPDF" />
      </button>

      <div className="toolsAndColors">
        <div className="colors">
          {colorThemeDisplay.map((theme) => (
            <span
              style={{ backgroundColor: theme?.bubble }}
              onClick={() => {
                setColorTheme(theme.name);
              }}
            />
          ))}
        </div>
        <div className="tools">
          {inputs.map((input) =>
            input.type === "textarea" ? (
              <div className="textareaGroup">
                <textarea
                  placeholder={input.placeholder}
                  rows={1}
                  onChange={(e) => {
                    input.action(e.target.value);
                  }}
                />
                <input
                  type="number"
                  value={input.fontValue}
                  className="number"
                  onChange={(e) => input.fontAction(e.target.value)}
                />
              </div>
            ) : (
              <>
                <input
                  placeholder={input.placeholder}
                  onChange={(e) => {
                    input.action(e.target.value);
                  }}
                />
              </>
            )
          )}
        </div>
      </div>

      <div className="page">
        <div className="titleBubble">{title}</div>
        <div className="topImageContainer">
          {/* <img className="topImage" src={topImage} alt="" /> */}
        </div>
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
    </AppStyled>
  );
}

export default App;
