import React from "react"
import {
  AirQualityContainer,
  FirstSection,
  Humidity,
  UVRays,
  UVRaysTitle,
  InfoWrapper,
  Cards,
  Card,
  ClimateQuality,
} from "./styles"
import { DropletHalf } from "@styled-icons/bootstrap"
import Separator from "../Separator"

interface AirQualityProps {}

const AirQuality: React.FC<AirQualityProps> = () => {
  return (
    <AirQualityContainer>
      <h2>Air quality</h2>

      <FirstSection>
        <ClimateQuality>Very Good</ClimateQuality>
        <h3 className="outline">480 CO2</h3>
        <Humidity className="outline">
          <DropletHalf width={16} />
          55%
        </Humidity>
      </FirstSection>

      <Separator color="#eceaf1" />

      <UVRays>
        <div>graph image</div>
        <InfoWrapper>
          <UVRaysTitle>UV Rays</UVRaysTitle>
          <Cards>
            <Card className="outline">3 - 5 LOW</Card>
            <Card className="outline">6 - 7 MEDIUM</Card>
            <Card className="outline">8 - 10 HIGH</Card>
          </Cards>
        </InfoWrapper>
      </UVRays>
    </AirQualityContainer>
  )
}
export default AirQuality
