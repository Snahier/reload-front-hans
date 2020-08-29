import styled from "styled-components"

export const LastMealContainer = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.white};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .description {
    margin-bottom: 2rem;

    h2,
    h3 {
      margin: 0;
    }
  }
`
