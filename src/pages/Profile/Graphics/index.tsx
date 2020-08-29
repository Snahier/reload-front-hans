import React from "react"
import { GraphicsContainer } from "./styles"
import AirQuality from "../../../components/AirQuality"

interface GraphicsProps {}

const Graphics: React.FC<GraphicsProps> = () => {
  return (
    <GraphicsContainer className="container">
      <div className="first-section">
        <AirQuality />
        <div>Bio marker priorities</div>
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
