import React from 'react'

const Today = ({ forecast, loading, geo }) => {
  if (loading) return <p>Loading...</p>
  return (
    <div>
      <h2>Todays forecast</h2>
      <h3>{forecast.summary}</h3>
      <p>{forecast.temperature} degrees celcius</p>
      <p>icon: {forecast.icon}</p>
    </div>
  )
}

export default Today
