import styled from "@emotion/styled";

interface StyleProps {
    theme: { page: string, title: string, infoAdviceTitle: string, infoSection: string, tipTitle: string, tipSection: string, hueRotate: string }
    image: string
    backgroundPosition: { x: number, y: number }
    isDragging: boolean
    fontSizes?: { summaryTitle?: number, summaryStrengthsText?: number, summaryIssuesText?: number }
}

export const SummaryPageStyled = styled.div<StyleProps>`
    .row {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
         .topImageContainer {
            position: relative;
            background-image: ${(props) => `url(${props.image})`};
            overflow: visible;
            position: relative;
            z-index: 1;
            height: 250px;
            background-size: cover;
            width: 350px;
            border-radius: 20% 70% 70% 30% / 30% 30% 60% 70%;
            background-repeat: no-repeat;
            padding: 20px;
            background-position: ${(props) =>
        `${props.backgroundPosition.x}% ${props.backgroundPosition.y}%`};
         cursor: ${(props) => `${props.isDragging ? "grabbing" : "grab"}`};
        }
        .medal {
            position: absolute;
            height: 100px;
            top: 280px;
            right: 80px;
            z-index: 1;
         }
        .summaryTitle {
            position: relative;
            color: ${(props) => props.theme.infoSection};
            font-size:  ${(props) => props.fontSizes.summaryTitle ? `${props.fontSizes.summaryTitle}px` : "60px"};
            width: 60%;
            line-height: 90px;
            font-weight: 700;
        }
       
    }
    .lower {
        justify-content: flex-end;
    }
     .summaryStrengthsText {
        white-space: pre-line;
        position: relative;
        margin-top: 70px;
        color: ${(props) => props.theme.infoSection};
        font-size:  ${(props) => props.fontSizes.summaryStrengthsText ? `${props.fontSizes.summaryStrengthsText}px` : "20px"};
        }
        .summaryIssuesText {
            white-space: pre-line;
            position: relative;
            margin-top: 30px;
            color: ${(props) => props.theme.infoSection};
            font-size:  ${(props) => props.fontSizes.summaryIssuesText ? `${props.fontSizes.summaryIssuesText}px` : "20px"};
        }
    .right {
        align-self: right;
        margin-top: 20px;
        text-align: right
   }
`