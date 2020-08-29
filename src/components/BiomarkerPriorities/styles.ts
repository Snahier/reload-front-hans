import styled from "styled-components"

export const BiomarkerPrioritiesContainer = styled.section`
  display: grid;
  grid-template-rows: 4rem 1fr;

  padding: 2rem;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin: 0;
      font-weight: normal;
      font-size: 1rem;
    }
  }
`

export const Graphics = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
