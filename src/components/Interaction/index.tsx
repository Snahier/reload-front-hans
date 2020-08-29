import React from "react"
import { InteractionContainer } from "./styles"
import { Clock } from "@styled-icons/evaicons-solid"

interface InteractionProps {}

const Interaction: React.FC<InteractionProps> = () => {
  return (
    <InteractionContainer>
      <div className="description">
        <div className="task-name">Runner</div>
        <div className="timestamp">
          <Clock width={12} />
          9h30
        </div>
      </div>
      <img
        src="https://images.pexels.com/photos/1390403/pexels-photo-1390403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Task"
      />
    </InteractionContainer>
  )
}
export default Interaction
