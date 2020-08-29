import styled, { css } from "styled-components"

export const LifestyleContainer = styled.section`
  position: relative;
  overflow: hidden;
  .backgroundImage {
    position: absolute;
    width: 400px;
    height: auto;
    top: -50px;
    right: -110px;
    z-index: -1;
  }

  ${(props) =>
    css`
      background: linear-gradient(
        to right top,
        ${props.theme.primary},
        ${props.theme.secondary}
      ) !important;
      z-index: -1;
    `};
  color: ${(props) => props.theme.white};

  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-content: center;

    h1 {
      font-size: 1rem;
      font-weight: normal;
    }
    margin-bottom: 2rem;
  }

  .content {
    display: flex;
    flex-direction: column;

    & > * {
      margin: 0.5rem 0;
    }
  }

  .mood {
    display: flex;
    justify-content: space-between;

    padding: 1.5rem;

    ${(props) =>
      css`
        background: linear-gradient(
          to right,
          ${props.theme.primary},
          ${props.theme.secondary}
        );
      `}
    border: 1px solid ${(props) => props.theme.primary};
    border-radius: 8px;
  }
`
