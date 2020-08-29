import React from "react"
import { HeaderContainer, Links, Logo, Content } from "./styles"
import reloadLogo from "../../assets/reload_logo.svg"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <Logo src={reloadLogo} />
      <Links>
        <li>link 1</li>
        <li>link 2</li>
        <li>link 3</li>
        <li>link 4</li>
      </Links>
      <Content>asd</Content>
    </HeaderContainer>
  )
}
export default Header
