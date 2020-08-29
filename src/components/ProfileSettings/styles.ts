import styled from "styled-components"

export const ProfileSettingsContainer = styled.div`
  grid-area: content;

  display: flex;
  align-items: center;

  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%;

    box-sizing: border-box;
    border: 4px solid #3092dc;
  }
`
