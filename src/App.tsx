import { ThemeProvider } from 'styled-components'
import { defaultTheme, Modes } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { List } from './components/List/List'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <List mode={Modes.GREEN} title1="Company name" title2="Vatin" />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
