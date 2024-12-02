import styled from "@emotion/styled/macro";

interface StyleProps {
  theme: { window: string }
}
export const PageContainerStyled = styled.div<StyleProps>`
  /* display: flex; */
  background-color: ${(props) => props.theme.window};
  padding-top: 50px;
  padding-bottom: 50px;
`;
