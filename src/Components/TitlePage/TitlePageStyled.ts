import styled from "@emotion/styled/macro";

interface StyleProps {
  image: string;
  theme: { title: string };
  imageStyle: boolean;
  isDragging: boolean;
  backgroundPosition: { x: number; y: number };
}
export const TitlePageStyled = styled.div<StyleProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .border {
      width: 100%;
      margin-top:360px;
      position: absolute;
      z-index:0;
      pointer-events: none;
    }
    .logo {
      position: absolute;
      height: 200px;
      width: 200px;
      bottom: 150px;
    }
    h1 {
        color: ${(props) => props.theme.title};
    }
    .dogAndHumanName {
      display: flex;
      flex-direction: column;
      justify-content: space-around; 
      max-width: 80%
      margin-top: 50px;
      padding: 5px;
      /* gap: 10px; */
      color: grey;
      font-size: 20px;
      border-radius: 20px;
      h2 {
        span {
          color: ${(props) => props.theme.title};
        }
      }
    }
  .titlePageImage {
    background-image: ${(props) => `url(${props.image})`};
    overflow: visible;
    position: relative;
    z-index: 1;
    height: 450px;
    background-size: cover;
    width:  ${(props) => props.imageStyle ? "450px" : "80%"};
    margin-top: 80px;
    border-radius: ${(props) => props.imageStyle ? "50%" : "10px"};
    background-repeat: no-repeat;
    padding: 20px;
    background-position: ${(props) =>
    `${props.backgroundPosition.x}% ${props.backgroundPosition.y}%`};
    cursor: ${(props) => `${props.isDragging ? "grabbing" : "grab"}`};
    transition: all 0.2s;
  }
`;
