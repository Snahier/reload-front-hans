import React from "react"
import { BarProgressContainer } from "./styles"

interface BarProgressProps {
  percentage: number
  label: string
}

const BarProgress: React.FC<BarProgressProps> = ({ percentage, label }) => {
  return (
    <BarProgressContainer percentage={percentage} label={label}>
      <div className="percentage">{percentage}%</div>
      <div className="barContainer">
        <div className="label">{label}</div>
        <div className="barProgress" />
      </div>
    </BarProgressContainer>
  )
}
export default BarProgress
