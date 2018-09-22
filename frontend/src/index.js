import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import App from './App'

const theme = {
  fontFamily: 'Helvetica Neue',
  backgroundColor: '#fff',
  black: '#323232',
}

const GlobalStyle = createGlobalStyle`
  html {
    background: ${p => p.theme.backgroundColor};
    color: ${p => p.theme.black};
    font-family: ${p => p.theme.fontFamily};
  }
`

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>
  </ThemeProvider>,
  document.getElementById('root')
)
