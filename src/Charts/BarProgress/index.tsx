import React from "react"
import { BarProgressContainer } from "./styles"

export interface BarProgressProps {
  percentage: number
  label: string
  barBackgroundColor?: string
  barColor?: string
  noBorder?: boolean
}

const BarProgress: React.FC<BarProgressProps> = ({ ...props }) => {
  return (
    <BarProgressContainer {...props}>
      <div className="percentage">{props.percentage}%</div>
      <div className="barContainer">
        <div className="label">{props.label}</div>
        <div className="barProgress" />
      </div>
    </BarProgressContainer>
  )
}
export default BarProgress
