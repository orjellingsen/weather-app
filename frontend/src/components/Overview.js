import React from 'react'

const Overview = ({ forecast, loading }) => {
  if (loading) return <p>Loading...</p>
  console.log(forecast)
  return (
    <div>
      <h2>{forecast.summary}</h2>
      <p>{forecast.temperature} degrees celcius</p>
      <p>icon: {forecast.icon}</p>
    </div>
  )
}

export default Overview
