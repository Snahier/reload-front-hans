import React from "react"
import { ProfileContainer } from "./styles"
import Header from "../../components/Header"

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <ProfileContainer id="Profile-component">
      <Header />
      <h1>Profile Component</h1>
    </ProfileContainer>
  )
}
export default Profile
