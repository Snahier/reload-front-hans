import React from "react"
import { HeaderContainer } from "./styles"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <h1>Header Component</h1>
    </HeaderContainer>
  )
}
export default Header
