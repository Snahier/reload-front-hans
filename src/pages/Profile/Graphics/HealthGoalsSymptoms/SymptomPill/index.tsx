import React from "react"
import { SymptomPillContainer } from "./styles"

interface SymptomPillProps {
  label: string
}

const SymptomPill: React.FC<SymptomPillProps> = ({ label }) => {
  return (
    <SymptomPillContainer>
      {label} <div className="ball" />
    </SymptomPillContainer>
  )
}
export default SymptomPill
