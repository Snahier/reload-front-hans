import styled, { css } from "styled-components"
import { screen } from "../../../styles/mixins"

export const LinksContainer = styled.ul`
  grid-area: links;

  height: 100%;
  ${screen(
    "desktop",
    css`
      padding: 1rem;
    `
  )}

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
