import React, { useState, useEffect } from "react"
import { CircleProgressContainer } from "./styles"

interface CircleProgressProps {
  percentage: number
}

const CircleProgress: React.FC<CircleProgressProps> = ({ percentage }) => {
  const [value, setValue] = useState(1)

  useEffect(() => {
    for (let index = 1; index <= percentage; index++) {
      setTimeout(() => {
        setValue(index)
      }, 100)
    }
  }, [])

  return (
    <CircleProgressContainer percentage={value}>
      <div className="percentage">
        <svg>
          <circle cx="70" cy="70" r="70" />
          <circle cx="70" cy="70" r="70" />
        </svg>
        <div className="number">{value}%</div>
      </div>
    </CircleProgressContainer>
  )
}
export default CircleProgress
