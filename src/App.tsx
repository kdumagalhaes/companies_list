import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { CompaniesProvider } from './context/CompaniesContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CompaniesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </CompaniesProvider>
    </ThemeProvider>
  )
}

export default App
