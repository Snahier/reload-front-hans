import React from "react"
import { HealthGoalsSymptomsContainer } from "./styles"
import Separator from "../../../../components/Separator"
import { theme } from "../../../../styles/theme"
import Button from "../../../../components/Button"
import SymptomPill from "./SymptomPill"

interface HealthGoealsSymptomsProps {}

const HealthGoealsSymptoms: React.FC<HealthGoealsSymptomsProps> = () => {
  return (
    <HealthGoalsSymptomsContainer>
      <div className="title">Health Goals And Symptoms</div>
      <Separator color={theme.tertiary} />

      <div className="content">
        <SymptomPill label="Skincare" />
        <SymptomPill label="Acne" />
        <SymptomPill label="Greying hair" />
      </div>
      <Separator color={theme.tertiary} />

      <div className="submit-area">
        <Button backgroundColor="#ECECEC" color="gray">
          Report new symptom
        </Button>
      </div>
    </HealthGoalsSymptomsContainer>
  )
}
export default HealthGoealsSymptoms
