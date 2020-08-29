import styled from "styled-components"

export const SymptomPillContainer = styled.div`
  display: flex;

  width: max-content;
  height: fit-content;

  padding: 0.7rem 1rem;
  margin-right: 1rem;

  font-size: 0.8rem;
  color: #c9cad1;
  border: 1px solid #e6e6e6;
  border-radius: 50px;

  .ball {
    content: "";
    width: 1rem;
    height: 1rem;
    border: 1px solid #e6e6e6;
    border-radius: 50%;
    margin-left: 1rem;
  }
`
