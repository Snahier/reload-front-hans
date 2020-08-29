import React from "react"
import { HeaderContainer, Links, Logo, Content } from "./styles"
import reloadLogo from "../../assets/reload_logo.svg"
import Button from "../Button"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <Logo src={reloadLogo} />
      <Links>
        <li>Biomarkers</li>
        <li>Nutrition</li>
        <li>Lifestyle</li>
        <li>Recommendation</li>
      </Links>
      <Content>
        <div>chat icon</div>
        <Button>Assessment</Button>
        <div>Profile settings</div>
      </Content>
    </HeaderContainer>
  )
}
export default Header
