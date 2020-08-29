import React from "react"
import { GraphicsContainer } from "./styles"
import AirQuality from "./AirQuality"
import BiomarkerPriorities from "./BiomarkerPriorities"
import HealthGoealsSymptoms from "./HealthGoalsSymptoms"
import Lifestyle from "./Lifestyle"
import ScoreNutrition from "./ScoreNutrition"

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
        <ScoreNutrition />
      </div>
    </GraphicsContainer>
  )
}
export default Graphics
