import styled from "@emotion/styled";

interface StyleProps {
    theme: { page: string, title: string, infoAdviceTitle: string, infoSection: string, tipTitle: string, tipSection: string, hueRotate: string }
    fontSizes?: { programTitle?: number, programInfo: number }
}

export const ProgramPageStyled = styled.div<StyleProps>`
.sportyDog {
    position: absolute;
    bottom: 20px;
    right: 20px;
    height: 200px;
}
  .programTitle {
        position: relative;
        color: ${(props) => props.theme.infoSection};
        font-size:  ${(props) => props.fontSizes.programTitle ? `${props.fontSizes.programTitle}px` : "60px"};
        line-height: 90px;
        font-weight: 700;
        }
    .programInfo {
        color: ${(props) => props.theme.infoSection};
        font-size:  ${(props) => props.fontSizes.programInfo ? `${props.fontSizes.programTitle}px` : "20px"};

    }
`