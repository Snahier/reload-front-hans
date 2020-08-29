import styled, { keyframes } from "styled-components"

interface Props {
  percentage: number
  label: string
}

function fillBar(props: Props) {
  return keyframes`
    from {
      width: 0%
    }
    to {
      width: ${`${props.percentage}%`};
    }
  `
}

export const BarProgressContainer = styled.div<Props>`
  display: flex;
  align-items: center;

  .percentage {
    margin-right: 1rem;
  }
  .barContainer {
    position: relative;
    width: 100%;
    height: 2rem;

    border-radius: 4px;
    border: 1px solid #e7e8e9;
    background: linear-gradient(to right, #ebeced, #fff);

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

      background: #0000ff50;
      border-radius: 4px;
    }
  }
`
