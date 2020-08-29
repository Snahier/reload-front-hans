import styled, { keyframes, css } from "styled-components"
import { BarProgressProps } from "."

function fillBar(props: BarProgressProps) {
  return keyframes`
    from {
      width: 0%
    }
    to {
      width: ${`${props.percentage}%`};
    }
  `
}

export const BarProgressContainer = styled.div<BarProgressProps>`
  display: grid;
  grid-template-columns: 3rem 1fr;
  align-items: center;

  .barContainer {
    position: relative;
    width: 100%;
    height: 2rem;

    ${(props) =>
      props.barBackgroundColor
        ? css`
            background: ${props.barBackgroundColor};
          `
        : css`
            background: linear-gradient(to right, #ebeced, #fff);
          `}

    border-radius: 4px;
    ${(props) =>
      !props.noBorder &&
      css`
        border: 1px solid #e7e8e9;
      `};

    div.label {
      position: absolute;
      top: 0;
      left: 1rem;
      height: 100%;

      display: flex;
      align-items: center;

      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.8rem;

      z-index: 1;
    }

    .barProgress {
      position: absolute;
      top: 0;
      left: 0;

      animation: ${(props) => fillBar} 2s ease-out forwards;

      height: 100%;

      background: ${(props) =>
        props.barColor ? props.barColor : props.theme.secondary};
      border-radius: 4px;
    }
  }
`
