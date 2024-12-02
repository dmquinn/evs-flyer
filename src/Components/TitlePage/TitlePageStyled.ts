import styled from "@emotion/styled/macro";

interface StyleProps {
  title: string;
  image: string;
  theme: { page: string, title: string }
}
export const TitlePageStyled = styled.div<StyleProps>`
 position: relative;
  height: 297mm;
  width: 210mm;
  overflow: hidden;
  background-color: ${(props) => props.theme.page};
  box-shadow: 0 0 12px 2px #b0b0b075;
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1{
        color: ${(props) => props.theme.title};

    }
  }
  .titlePageImage {
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
