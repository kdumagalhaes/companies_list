import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header, Modes } from './components/Header/Header'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header mode={Modes.RED} type="company" title="Local Public Office" />
      <Header mode={Modes.GREEN} type="" title="Local Office" />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
