import styled from "styled-components"

export const SeparatorContainer = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => (props.color ? props.color : "#000")};
`
