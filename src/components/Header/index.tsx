import React from "react"
import { HeaderContainer, Logo, Content } from "./styles"
import reloadLogo from "../../assets/reload_logo.svg"
import Button from "../Button"
import { ChatDotsFill } from "@styled-icons/bootstrap"
import ProfileSettings from "../ProfileSettings"
import Links from "./Links"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <Logo src={reloadLogo} />

      <Links />

      <Content>
        <Button backgroundColor="#3092DC" round>
          <ChatDotsFill color="#fff" />
        </Button>

        <Button>Assessment</Button>

        <ProfileSettings>Profile settings</ProfileSettings>
      </Content>
    </HeaderContainer>
  )
}
export default Header
