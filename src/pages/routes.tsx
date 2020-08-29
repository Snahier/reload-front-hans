import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <h1>Hello World</h1>
      </Route>
    </BrowserRouter>
  )
}
export default Routes
