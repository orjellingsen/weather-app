import React, { Component, Fragment } from 'react'
import { Router } from '@reach/router'
import styled from 'styled-components'

import { fetchForecast } from './lib/api'
import Header from './components/Header'
import Today from './components/Today'
import Details from './components/Details'
import LongTerm from './components/LongTerm'
import Search from './components/Search'
import { DARKSKY_PARAMS } from './config'

const StyledApp = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  background: white;
`

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
      <StyledApp>
        <Header />
        <Search getForecast={this.getForecast} />
        <Router>
          <Today path="/" forecast={forecast.currently} geo={geo} loading={loading} />
          <LongTerm path="/longterm" forecast={forecast.weekly} />
          <Details path="/details/:id" />
          <NotFound default />
        </Router>
      </StyledApp>
    )
  }
}

export default App
