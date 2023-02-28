import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:focus {
    outline: transparent;
}
body {
    background-color: ${({ theme }) => theme['lighter-gray']};
    color: ${({ theme }) => theme.gray};
}
body, input, textarea, button {
    font: 400 1rem 'Inter', sans-serif;
}

ul {
    list-style: none;
}
`
