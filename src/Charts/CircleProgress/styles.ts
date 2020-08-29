import styled from "styled-components"

interface Props {
  percentage: number
}

export const CircleProgressContainer = styled.div<Props>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .percentage {
    svg {
      position: relative;
      width: 150px;
      height: 150px;

      circle {
        width: 150px;
        height: 150px;
        fill: none;
        stroke-width: 10;
        stroke: #000;
        transform: translate(5px, 5px);
        stroke-dasharray: 440;
        stroke-dashoffset: 440;
        stroke-linecap: round;

        &:nth-child(1) {
          stroke-dashoffset: 0;
          stroke: #ececec;
        }
        &:nth-child(2) {
          stroke-dashoffset: calc(
            440 - (440 * ${(props) => props.percentage}) / 100
          );
          stroke: ${(props) => props.theme.primary};
        }
      }
    }
    .number {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
    }
  }
`
