import styled from "styled-components"

export const InteractionContainer = styled.div`
  display: grid;
  grid:
    "description image" 1fr
    /1fr max-content;
  gap: 2rem;
  align-items: center;

  color: ${(props) => props.theme.tertiary};

  .description {
    grid-area: description;
    .task-name,
    .timestamp {
      font-size: 0.8rem;
    }
    .timestamp {
      display: flex;
      align-items: center;
    }
  }

  background: ${(props) => props.theme.primary};

  padding: 0.5rem 1rem;
  border-radius: 8px;

  img {
    grid-area: image;

    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
`
