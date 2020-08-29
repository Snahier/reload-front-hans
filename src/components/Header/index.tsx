import React from "react"
import { HeaderContainer, Logo, Content } from "./styles"
import reloadLogo from "../../assets/reload_logo.svg"
import Button from "../Button"
import ProfileSettings from "../ProfileSettings"
import Links from "./Links"
import chatIcon from "../../assets/chat_icon.svg"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <Logo src={reloadLogo} />

      <Links />

      <Content>
        <Button backgroundColor="#3092DC" round>
          <img color="#fff" width={16} height={16} src={chatIcon} alt="Chat" />
        </Button>

        <Button>Assessment</Button>

        <ProfileSettings>Profile settings</ProfileSettings>
      </Content>
    </HeaderContainer>
  )
}
export default Header
