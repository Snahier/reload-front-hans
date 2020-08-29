import React from "react"
import { BiomarkerPrioritiesContainer, Graphics } from "./styles"
import Button from "../../../../components/Button"
import BarProgress from "../../../../Charts/BarProgress"

interface BiomarkersPrioritiesProps {}

const BiomarkerPriorities: React.FC<BiomarkersPrioritiesProps> = () => {
  return (
    <BiomarkerPrioritiesContainer>
      <div className="title">
        <h1>Biomarkers Priorities</h1>
        <Button>See More</Button>
      </div>
      <Graphics>
        <BarProgress percentage={45} label="Digestion" />
        <BarProgress percentage={60} label="Energy" />
        <BarProgress percentage={40} label="Detox" />
        <BarProgress percentage={30} label="Messaging" />
        <BarProgress percentage={80} label="Antioxidany" />
      </Graphics>
    </BiomarkerPrioritiesContainer>
  )
}
export default BiomarkerPriorities
