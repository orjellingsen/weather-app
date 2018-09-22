import React, { Component, Fragment } from 'react'
import { Router } from '@reach/router'

import { getForecast } from './lib/api'
import Header from './components/Header'
import Overview from './components/Overview'
import Details from './components/Details'
import LongTerm from './components/LongTerm'

const NotFound = () => <div>Page Not Found</div>

class App extends Component {
  state = {
    loading: true,
    forecast: {},
  }

  async componentDidMount() {
    await getForecast({
      lat: 42.3601,
      lng: -71.0589,
      params: 'lang=no&exclude=minutely&units=si',
    }).then(forecast => this.setState({ forecast, loading: false }))
  }

  render() {
    const { forecast, loading } = this.state
    return (
      <Fragment>
        <Header />
        <Router>
          <Overview path="/" forecast={forecast.currently} loading={loading} />
          <LongTerm path="/longterm" />
          <Details path="/details/:id" />
          <NotFound default />
        </Router>
      </Fragment>
    )
  }
}

export default App
