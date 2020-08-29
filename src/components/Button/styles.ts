import styled from "styled-components"

interface Props {
  backgroundColor?: string
  textColor?: string
}

export const ButtonContainer = styled.button<Props>`
  border: none;
  border-radius: 8px;
  padding: 0.7rem 3rem;

  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#15d4d4"};

  color: ${(props) => (props.textColor ? props.textColor : "#fff")};
`
