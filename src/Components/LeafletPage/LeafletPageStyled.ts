import styled from "@emotion/styled/macro";

interface StyleProps {
  theme: { page: string, title: string, infoAdviceTitle: string, infoSection: string, tipTitle: string, tipSection: string, hueRotate: string }
  image: string
  backgroundPosition: { x: number, y: number }
  isDragging: boolean
  infoSize: number
  tipSize: number
}
export const LeafletPageStyled = styled.div<StyleProps>`
  position: relative;
  height: 297mm;
  width: 210mm;
  overflow: hidden;
  background-color: ${(props) => props.theme.page};
  box-shadow: 0 0 12px 2px #b0b0b075;
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
  .titleBubble {
    position: relative;
    font-weight: 700;
    line-height: 1;
    margin-top: -80px;
    margin-left: -80px;
    font-size: 40px;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    background-color: ${(props) => props.theme.title};
    width: fit-content;
    max-width: 500px;
    word-wrap: break-word;
    padding: 90px;
    color: white;
    transform: rotate(-5deg);
    z-index: 0;
  }
  .topImageContainer {
    background-image: ${(props) => `url(${props.image})`};
    overflow: visible;
    position: relative;
    z-index: 1;
    height: 300px;
    background-size: cover;
    width: 350px;
    margin-top: -50px;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    background-repeat: no-repeat;
    padding: 20px;
    background-position: ${(props) =>
    `${props.backgroundPosition.x}% ${props.backgroundPosition.y}%`};
    cursor: ${(props) => `${props.isDragging ? "grabbing" : "grab"}`};
  }

  .infoAndAdviceTitle {
    position: relative;
    z-index: 2;
    background-color: ${(props) => props.theme.infoAdviceTitle};
    width: fit-content;
    margin-top: -40px;
    padding: 0 20px;
    font-size: 40px;
    color: white;
    border-radius: 10px;
    font-weight: 700;
    transform: rotate(-2deg);
  }
  .infoSection {
    line-height: 20px;
    font-weight: 400;
    padding: 40px;
    background-color: ${(props) => props.theme.infoSection};
    color: white;
    border-radius: 20% 20% 30% 10% / 20% 20% 30% 30%;
    max-width: 56%;
    white-space: pre-line;
    font-family: "Montserrat", sans-serif;
    font-size: ${(props) => `${props.infoSize}px`};
    span {
      font-family: "Montserrat", sans-serif;
    }
  }
  .topTipTitle {
    position: relative;
    z-index: 2;
    background-color: ${(props) => props.theme.tipTitle};
    width: fit-content;
    padding: 0 20px;
    font-size: 40px;
    color: white;
    border-radius: 10px;
    font-weight: 700;
    transform: rotate(-3deg);
  }
  .topTipSection {
    position: relative;
    z-index: 1;
    line-height: 20px;
    font-weight: 400;
    font-size: ${(props) => `${props.tipSize}px`};
    padding: 40px;
    background-color: ${(props) => props.theme.tipSection};
    color: white;
    border-radius: 10% 20% 40% 10% / 30% 20% 40% 40%;
    max-width: 50%;
    white-space: pre-line;
    font-family: "Montserrat", sans-serif;
  }
  .logo {
    position: absolute;
    height: 300px;
    top: 120px;
    right: 50px;
    overflow: visible;
    filter: ${(props) =>
    `drop-shadow(-4px -2px 8px #80808032) hue-rotate(${props.theme.hueRotate})`};
  }
  .grass {
    position: absolute;
    z-index: 2;
    bottom: 0px;
    overflow: visible;
    height: 120px;
    left: -10px;
  }
  .sign {
    position: absolute;
    z-index: 1;
    bottom: 00px;
    height: 500px;
    overflow: visible;
    right: 50px;
  }
  .lightbulb {
    position: relative;
    z-index: 3;
    height: 40px;
    width: 40px;
    background-color: #ffffff;
    box-shadow: 0px 0px 12px 12px #80808032;
    border-radius: 50%;
    padding: 20px;
    transform: rotate(-10deg);
    top: -25px;
  }
`;
