import React, { Component, Fragment } from 'react'
import { Router } from '@reach/router'

import { fetchForecast } from './lib/api'
import Header from './components/Header'
import Overview from './components/Overview'
import Details from './components/Details'
import LongTerm from './components/LongTerm'
import Search from './components/Search'
import { DARKSKY_PARAMS } from './config'

const NotFound = () => <div>Page Not Found</div>

class App extends Component {
  state = {
    loading: true,
    forecast: {},
    location: {},
  }

  getForecast = async location => {
    this.setState({ loading: true })
    // save location to localstorage
    await fetchForecast({
      ...location.geometry,
      params: DARKSKY_PARAMS,
    }).then(({ forecast }) => this.setState({ forecast, location, loading: false }))
  }

  async componentDidMount() {
    // fetch first location from localstorage
    await fetchForecast({
      lat: 60.3943034,
      lng: 5.3258117,
      params: DARKSKY_PARAMS,
    }).then(({ forecast }) => this.setState({ forecast, loading: false }))
  }

  render() {
    const { forecast, loading, geo } = this.state
    return (
      <Fragment>
        <Header />
        <Search getForecast={this.getForecast} />
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
