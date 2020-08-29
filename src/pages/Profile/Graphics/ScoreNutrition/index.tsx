import React from "react"
import { ScoreNutritionContainer } from "./styles"
import CircleProgress from "../../../../Charts/CircleProgress"
import LastMeal from "./LastMeal"

interface ScoreNutritionProps {}

const ScoreNutrition: React.FC<ScoreNutritionProps> = () => {
  return (
    <ScoreNutritionContainer>
      <img
        src="https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Background"
        className="backgroundImage"
      />
      <div className="content">
        <div className="progress">
          <CircleProgress percentage={47} />
          <h1>Score Nutrition</h1>
        </div>
        <LastMeal foodName="Salad Greek" percentage={15} />
      </div>
    </ScoreNutritionContainer>
  )
}
export default ScoreNutrition
