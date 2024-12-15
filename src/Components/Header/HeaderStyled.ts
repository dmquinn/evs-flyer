import styled from "@emotion/styled";

export const HeaderStyled = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    color: red;
    padding: 20px;
    width: 100%;
    z-index: 10;
    align-items: center;
    gap: 50px;
    background-color: white;
    box-shadow: 0px 0px 12px 2px #80808032;
    button {
        position: relative;
    }
    .modeButtonsRow {
    position: relative;
    margin-left: 30px;
    display: flex;
    gap: 20px;
    .modeButtons {
      position: relative;
      font-size: 20px;
    }
  }
   .colors {
    display: flex;
    gap: 20px;
    margin-left: 20px;
    span {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .pdfButton {
    margin-left: 60px;
  }
`