import React from "react"
import { CircleProgressContainer } from "./styles"

interface CircleProgressProps {
  percentage: number
}

const CircleProgress: React.FC<CircleProgressProps> = ({ percentage }) => {
  return (
    <CircleProgressContainer percentage={percentage}>
      <div className="percentage">
        <svg>
          <circle cx="70" cy="70" r="70" />
          <circle cx="70" cy="70" r="70" />
        </svg>
        <div className="number">{percentage}%</div>
      </div>
    </CircleProgressContainer>
  )
}
export default CircleProgress
