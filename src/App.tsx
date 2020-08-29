import React from "react"
import Routes from "./pages/routes"
import { GlobalStyles } from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default App
