import styled, { css } from "styled-components"
import { screen } from "../../styles/mixins"

export const HeaderContainer = styled.nav`
  display: grid;
  grid:
    "logo links content" max-content
    / max-content 1.5fr 1fr;
  align-items: center;

  ${screen(
    "mobile",
    css`
      grid:
        "logo content" 4rem
        "links links" 1fr
        / 1fr 1fr;
    `
  )}

  background: #4A54DF;
`

export const Logo = styled.img`
  grid-area: logo;
  padding: 1rem;
  margin-right: 3rem;
  margin-left: 1.5rem;
`

export const Content = styled.div`
  grid-area: content;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
