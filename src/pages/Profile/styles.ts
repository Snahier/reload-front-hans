import styled from "styled-components"
import defaultBackground from "../../assets/default_background.png"

export const ProfileContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  display: grid;
  grid:
    "navbar" max-content
    "stories" 200px
    "graphics" 1fr
    / 1fr;

  background: url(${defaultBackground});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 101vw 50vh;
  background-attachment: local;
`
