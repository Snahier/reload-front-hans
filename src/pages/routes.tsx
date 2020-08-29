import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Profile from "./Profile"

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Profile} />
    </BrowserRouter>
  )
}
export default Routes
