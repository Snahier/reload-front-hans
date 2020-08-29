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

export const Links = styled.ul`
  grid-area: links;
  padding: 1rem;
  height: 100%;

  display: flex;
  ${screen(
    "mobile",
    css`
      flex-direction: column;
    `
  )}

  li {
    display: flex;
    align-items: center;

    position: relative;

    list-style-type: none;
    margin-right: 3rem;

    img {
      margin-right: 0.5rem;
    }

    a {
      text-decoration: none;
      color: #3092dc;
      transition: color 0.2s;
    }

    &::before {
      content: "";

      position: absolute;
      bottom: 0;
      left: 0;

      width: 2rem;
      height: 2px;

      background: transparent;

      transition: background-color 0.2s;
    }

    &:hover {
      a {
        color: #fff;
      }
      &::before {
        background: #fff;
      }
    }
  }
`

export const Content = styled.div`
  grid-area: content;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
