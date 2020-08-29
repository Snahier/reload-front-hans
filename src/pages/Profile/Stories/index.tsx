import React, { useState } from "react"
import { StoriesContainer, InteractionList } from "./styles"
import Interaction from "../../../components/Interaction"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@styled-icons/material"
import { theme } from "../../../styles/theme"

interface StoriesProps {}

const Stories: React.FC<StoriesProps> = () => {
  const [userName, setUserName] = useState("Astel")

  return (
    <StoriesContainer className="container">
      <section className="user">
        <h1>Hey {userName}!</h1>
        <p>see your stories relevant interactions</p>
      </section>
      <InteractionList>
        <KeyboardArrowLeft width={30} color={theme.white} />
        {[1, 2, 3, 4, 5].map((interaction) => (
          <Interaction key={interaction} />
        ))}
        <KeyboardArrowRight width={30} color={theme.white} />
      </InteractionList>
    </StoriesContainer>
  )
}
export default Stories
