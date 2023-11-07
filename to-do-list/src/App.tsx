import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/Themes/default"
import { GlobalStyles } from "./styles/global"
import { Home } from "./pages/Home"

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
