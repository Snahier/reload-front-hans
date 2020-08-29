import React from "react"
import { HeaderContainer, Links, Logo, Content } from "./styles"
import reloadLogo from "../../assets/reload_logo.svg"
import Button from "../Button"
import { ChatDotsFill } from "@styled-icons/bootstrap"
import ProfileSettings from "../ProfileSettings"

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
        <Button backgroundColor="#3092DC" round>
          <ChatDotsFill color="#fff" width={16} height={16} />
        </Button>

        <Button>Assessment</Button>

        <ProfileSettings>Profile settings</ProfileSettings>
      </Content>
    </HeaderContainer>
  )
}
export default Header
