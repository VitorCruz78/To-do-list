import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { defaultTheme } from "./styles/Themes/default"
import { GlobalStyles } from "./styles/global"
import { Home } from "./pages/Home"

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Header />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
