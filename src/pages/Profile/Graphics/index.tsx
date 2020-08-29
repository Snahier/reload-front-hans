import React from "react"
import { GraphicsContainer } from "./styles"
import AirQuality from "./AirQuality"
import BiomarkerPriorities from "./BiomarkerPriorities"
import HealthGoealsSymptoms from "./HealthGoalsSymptoms"
import Lifestyle from "./Lifestyle"

interface GraphicsProps {}

const Graphics: React.FC<GraphicsProps> = () => {
  return (
    <GraphicsContainer className="container">
      <div className="first-section">
        <AirQuality />
        <BiomarkerPriorities />
        <HealthGoealsSymptoms />
      </div>
      <div className="second-section">
        <Lifestyle />
        <div>Score nutrition</div>
      </div>
    </GraphicsContainer>
  )
}
export default Graphics
