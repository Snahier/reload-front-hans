import styled from "styled-components"

export const GraphicsContainer = styled.div`
  grid-area: graphics;
  justify-self: center;
  margin-bottom: 5rem;

  color: ${(props) => props.theme.gray};

  .first-section {
    display: grid;
    grid-template-columns: 0.7fr 1fr 0.5fr;
    grid-template-rows: 350px;
    gap: 1rem;

    & > * {
      background: #f7f8fb;
      border-radius: 8px;
    }
  }
  .second-section {
    display: grid;
    grid-template-columns: 1.2fr 2fr;
    grid-template-rows: 350px;
    gap: 1rem;

    margin-top: 1rem;

    & > * {
      background: #f7f8fb;
      border-radius: 8px;
    }
  }
`
