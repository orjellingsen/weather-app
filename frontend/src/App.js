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
    geo: {},
  }

  async componentDidMount() {
    await getForecast({
      address: 'Lerkerinden 13',
      params: 'exclude=minutely&units=si',
    }).then(({ forecast, geo }) => this.setState({ forecast, geo, loading: false }))
  }

  render() {
    const { forecast, loading, geo } = this.state
    return (
      <Fragment>
        <Header />
        <Router>
          <Overview path="/" forecast={forecast.currently} geo={geo} loading={loading} />
          <LongTerm path="/longterm" />
          <Details path="/details/:id" />
          <NotFound default />
        </Router>
      </Fragment>
    )
  }
}

export default App
