import React from "react"
import { ProfileContainer } from "./styles"
import Stories from "./Stories"
import Header from "../../components/Header"
import Graphics from "./Graphics"

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <ProfileContainer id="Profile-component">
      <Header />
      <Stories />
      <Graphics />
    </ProfileContainer>
  )
}
export default Profile
