import React, { useState } from "react"
import { LifestyleContainer } from "./styles"
import Button from "../../../../components/Button"
import BarProgress from "../../../../Charts/BarProgress"
import lifestyleIconBackground from "../../../../assets/navbar/lifestyle_menu_icon.svg"

interface LifestyleProps {}

const Lifestyle: React.FC<LifestyleProps> = () => {
  const [activities, setActivities] = useState([
    { name: "Physical activity", percentage: 50 },
    { name: "Sleep", percentage: 0 },
    { name: "Productivity", percentage: 50 },
  ])

  return (
    <LifestyleContainer>
      <header>
        <h1>Lifestyle</h1>
        <Button>See More</Button>
      </header>
      <div className="content">
        <img
          src={lifestyleIconBackground}
          alt="Background Icon"
          className="backgroundImage"
        />
        {activities.map((activity) => (
          <BarProgress
            key={activity.name}
            percentage={activity.percentage}
            label={activity.name}
            noBorder
            barBackgroundColor="#808BE4"
            barColor="#36B1E7"
          />
        ))}
        <div className="mood">
          <div>Mood - Mind Balance</div>
          <div className="emojiPercentage">
            <span role="img" aria-label="Relaxed">
              😌
            </span>{" "}
            75%
          </div>
        </div>
      </div>
    </LifestyleContainer>
  )
}
export default Lifestyle
