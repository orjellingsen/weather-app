import React, { Component, Fragment } from 'react'
import { Router } from '@reach/router'

import { getForecast } from './lib/api'
import Header from './components/Header'
import Overview from './components/Overview'
import Details from './components/Details'
import LongTerm from './components/LongTerm'

const NotFound = () => <div>Page Not Found</div>

class App extends Component {
  async componentDidMount() {
    const forecast = await getForecast({
      lat: 42.3601,
      lng: -71.0589,
      params: 'lang=no&exclude=minutely&units=si',
    })
    console.log(forecast)
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Router>
          <Overview path="/" />
          <LongTerm path="/week" />
          <Details path="/details/:id" />
          <NotFound default />
        </Router>
      </Fragment>
    )
  }
}

export default App
