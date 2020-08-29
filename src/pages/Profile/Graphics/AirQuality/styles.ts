import styled from "styled-components"

export const AirQualityContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2 {
    width: 100%;
    margin: 0 2rem;

    font-size: 1rem;
    font-weight: normal;
  }

  .outline {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #eceaf1;
    border-radius: 8px;
    color: #c5c5cc;
    background: transparent;
    &:hover {
      background: #fff;
    }

    font-weight: 300;
    font-size: 0.9rem;

    padding: 0.8rem 2rem;

    transition: background-color 0.2s;
  }
`

export const FirstSection = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 2rem;

  h3 {
    display: flex;
    justify-content: center;
    align-content: center;

    margin: 0;
    font-size: 1rem;
    font-weight: normal;
  }
`

export const ClimateQuality = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.7rem 2rem;
  border-radius: 8px;

  background: #15d4d4;
  color: ${(props) => props.theme.white};
  font-size: 0.7rem;
`

export const Humidity = styled.h3`
  display: flex;
  align-items: center;
`

export const UVRays = styled.div`
  display: grid;
  grid:
    "uvGraphic details" 1fr
    /1fr 2fr;
  align-items: center;

  padding-left: 2rem;
`
export const InfoWrapper = styled.div`
  grid-area: details;
  margin-left: 1.5rem;
`
export const UVRaysTitle = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
  margin-bottom: 0.5rem;
`
export const Cards = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 300px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  & > * {
    margin-right: 1rem;
  }
`
export const Card = styled.div`
  min-width: max-content;
`
