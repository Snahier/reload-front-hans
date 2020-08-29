import React from "react"
import { ProfileContainer } from "./styles"

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <ProfileContainer id="Profile-component">
      <h1>Profile Component</h1>
    </ProfileContainer>
  )
}
export default Profile
