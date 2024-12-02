import styled from "@emotion/styled/macro";

export const AppStyled = styled.div`
  background-color: #F5F5DC;
  padding-top: 50px;
  padding-bottom: 50px;
  button {
    position: absolute;
    right: 20px;
    padding: 10px;
    border: 0;
    background: transparent;
    border-radius: 50%;
    padding: 15 px;
    cursor: pointer;
    &:hover {
      background-color: #ffffff9c;
    }
    img {
      height: 50px;
      width: 50px;
    }
  }
  .modeButtonsRow {
    position: relative;
    margin-left: 30px;
    margin-bottom: 30px;
    display: flex;
    gap: 10px;
    .modeButtons {
      position: relative;
      font-size: 20px;
    }
  }
  .highlighted {
    position: relative;
    z-index: 1;
  }
  .highlighted::before {
    content: "";
    position: absolute;
    top: 70%;
    left: 0;
    width: 105%;
    margin-left: -5%;
    height: 30%;
    background-color: gray;
    z-index: -1;
    border-radius: 1px;
  }
`;
