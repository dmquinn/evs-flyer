import styled from "@emotion/styled/macro";

export const ToolsStyled = styled.div`
  position: fixed;
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
  .tools {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 10px;
    position: absolute;
    input,
    textarea {
      padding: 10px;
      border: none;
      margin: 10px;
      width: 150px;
    }
  }

  .textareaGroup {
    display: flex;
  }
  .number {
    width: 30px !important;
  }
`;
