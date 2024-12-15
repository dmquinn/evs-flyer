import styled from "@emotion/styled/macro";

interface StyleProps {
  theme: { window: string; page: string }
}
export const PageContainerStyled = styled.div<StyleProps>`
  background-color: ${(props) => props.theme.window};
  padding-top: 100px;
  padding-bottom: 50px;
  .page {
    position: relative;
    height: 297mm;
    width: 210mm;
    overflow: hidden;
    background-color: ${(props) => props.theme.page};
    box-shadow: 0 0 12px 2px #b0b0b075;
    padding: 50px;
    margin-left: auto;
    margin-right: auto;
  }
  .tools {
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 300px;
    gap: 10px;
    margin: 10px;
  }
  .fontSelector {
    display: flex;
    gap:10px;
    padding: 20px;
    color: grey;
    align-items: center;
    input {
      border: 0;
      padding: 10px 0px 10px 10px;
    }
  }
  .imgInput {
    border: 0;
    padding: 10px 0px 10px 10px;
  }
  .switchContainer {
    display: flex;
    align-items: center;
    color:grey;
    gap: 10px;
    top: 200px;
  }
  .toggle-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
}
.toggle-switch input[type="checkbox"] {
  display: none;
}
.toggle-switch .switch {
  position: absolute;
  cursor: pointer;
  background-color: #ccc;
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;
}
.toggle-switch .switch::before {
  position: absolute;
  content: "";
  left: 2px;
  top: 2px;
  width: 21px;
  height: 21px;
  background-color: #aaa;
  border-radius: 50%;
  transition: transform 0.3s ease;
}
.toggle-switch input[type="checkbox"]:checked + .switch::before {
  transform: translateX(25px);
  background-color: #6699cc;
}
.toggle-switch input[type="checkbox"]:checked + .switch {
  background-color: #336699;
}
`;
