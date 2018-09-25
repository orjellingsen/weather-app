import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import App from './App'

const theme = {
  fontFamily: 'Helvetica Neue',
  black: '#323232',
  lightGrey: '#eee',
}

const GlobalStyle = createGlobalStyle`
  html {
    color: ${p => p.theme.black};
    font-family: ${p => p.theme.fontFamily};
    box-sizing: border-box;
    font-size: 10px;
    background: ${p => p.theme.lightGrey};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;
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
