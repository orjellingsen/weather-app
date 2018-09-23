import React from 'react'

const Overview = ({ forecast, loading, geo }) => {
  if (loading) return <p>Loading...</p>
  console.log(geo)
  return (
    <div>
      <h2>Forecast - {geo.formatted}</h2>
      <h3>{forecast.summary}</h3>
      <p>{forecast.temperature} degrees celcius</p>
      <p>icon: {forecast.icon}</p>
    </div>
  )
}

export default Overview
