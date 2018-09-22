const apiKey = 'b6210ea9f725a8095afab0f5649540f1'

export const getForecast = async (lat, lng) => {
  const data = await fetch(`https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`)
  return data.json()
}
