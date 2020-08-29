import React from "react"
import { ProfileSettingsContainer } from "./styles"
import { ThreeDotsVertical } from "@styled-icons/bootstrap"

interface ProfileSettingsProps {}

const ProfileSettings: React.FC<ProfileSettingsProps> = () => {
  return (
    <ProfileSettingsContainer>
      <img
        src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
      <ThreeDotsVertical width={16} color="#3092DC" />
    </ProfileSettingsContainer>
  )
}
export default ProfileSettings
