import React, { Component, Fragment } from 'react'
import { Router } from '@reach/router'

import Header from './components/Header'
import Search from './components/Search'
import { getForecast } from './darkSkyApi'

const Home = () => <div>Home</div>
const DetailsView = () => <div>Details View</div>
const NotFound = () => <div>Page Not Found</div>

class App extends Component {
  componentDidMount() {
    getForecast(42.3601, -71.0589).then(data => console.log(data))
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Router>
          <Home path="/" />
          <Search path="/search" />
          <DetailsView path="/details" />
          <NotFound default />
        </Router>
      </Fragment>
    )
  }
}

export default App
