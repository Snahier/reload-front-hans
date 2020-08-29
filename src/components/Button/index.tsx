import React, { ButtonHTMLAttributes } from "react"
import { ButtonContainer } from "./styles"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string
  color?: string
  round?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>
}
export default Button
