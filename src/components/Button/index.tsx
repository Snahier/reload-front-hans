import React from "react"
import { ButtonContainer } from "./styles"

interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>
}
export default Button
