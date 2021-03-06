import styled, { css } from "styled-components"
import { ButtonProps } from "."

export const ButtonContainer = styled.button<ButtonProps>`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.round
      ? css`
          border-radius: 50%;
          min-width: 35px;
          min-height: 35px;
        `
      : css`
          border-radius: 8px;
          padding: 0.7rem 3rem;
        `}

  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#15d4d4"};
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  color: ${(props) => (props.color ? props.color : "#fff")};
`
