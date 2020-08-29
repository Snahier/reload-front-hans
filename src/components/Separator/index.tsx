import React from "react"
import { SeparatorContainer } from "./styles"

interface SeparatorProps {
  color?: string
}

const Separator: React.FC<SeparatorProps> = ({ color }) => {
  return <SeparatorContainer color={color} />
}
export default Separator
