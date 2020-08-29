import styled from "styled-components"

export const ScoreNutritionContainer = styled.section`
  position: relative;
  overflow: hidden;
  z-index: -1;

  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .progress {
      display: flex;
      align-items: center;
      h1 {
        margin-left: 2rem;
        font-size: 2rem;
        font-weight: none;
        color: ${(props) => props.theme.white};
      }
    }
  }

  .backgroundImage {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: brightness(50%);
  }
`
