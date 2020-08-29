import styled from "styled-components"

export const StoriesContainer = styled.div`
  grid-area: stories;
  justify-self: center;

  display: grid;
  grid:
    "userInfo storiesCards" 1fr
    / max-content 1fr;
  align-items: center;
  gap: 10rem;

  section.user {
    grid-area: userInfo;

    h1,
    p {
      margin: 0;
      color: ${(props) => props.theme.white};
    }
    h1 {
      font-size: 2rem;
      font-weight: normal;
    }
    p {
      font-size: 0.8rem;
    }
  }
`

export const InteractionList = styled.section`
  display: flex;

  & > * {
    margin-right: 2rem;
  }
`
