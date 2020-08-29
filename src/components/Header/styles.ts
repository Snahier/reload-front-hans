import styled, { css } from "styled-components"
import { screen } from "../../styles/mixins"

export const HeaderContainer = styled.nav`
  display: grid;
  grid:
    "logo links content" 4rem
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

  background: skyblue;
`

export const Logo = styled.img`
  grid-area: logo;
  padding: 1rem;
`

export const Links = styled.ul`
  grid-area: links;

  display: flex;
  ${screen(
    "mobile",
    css`
      flex-direction: column;
    `
  )}

  li {
    text-decoration: none;
    list-style-type: none;
    margin-right: 3rem;
  }
`

export const Content = styled.div`
  grid-area: content;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
