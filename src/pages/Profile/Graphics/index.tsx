import React from "react"
import { GraphicsContainer } from "./styles"
import AirQuality from "../../../components/AirQuality"
import BiomarkerPriorities from "../../../components/BiomarkerPriorities"

interface GraphicsProps {}

const Graphics: React.FC<GraphicsProps> = () => {
  return (
    <GraphicsContainer className="container">
      <div className="first-section">
        <AirQuality />
        <BiomarkerPriorities />
        <div>Health goals and symptoms</div>
      </div>
      <div className="second-section">
        <div>Lifestyle</div>
        <div>Score nutrition</div>
      </div>
    </GraphicsContainer>
  )
}
export default Graphics
