import styled from "styled-components"

interface SymptomPillProps {
  label: string
}

export const HealthGoalsSymptomsContainer = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    flex: 1;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .content {
    flex: 2;

    display: flex;
    flex-wrap: wrap;

    padding: 1rem;
  }
  .submit-area {
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`
