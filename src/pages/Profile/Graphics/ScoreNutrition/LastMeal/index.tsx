import React from "react"
import { LastMealContainer } from "./styles"
import CircleProgress from "../../../../../Charts/CircleProgress"

interface LastMealProps {
  foodName: string
  percentage: number
}

const LastMeal: React.FC<LastMealProps> = ({ foodName, percentage }) => {
  return (
    <LastMealContainer>
      <div className="description">
        <h3>Last Meal</h3>
        <h2>{foodName}</h2>
      </div>
      <CircleProgress percentage={percentage} />
    </LastMealContainer>
  )
}
export default LastMeal
