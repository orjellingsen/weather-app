require('dotenv').config({ path: 'variables.env' })
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')
const opencage = require('opencage-api-client')

const uri = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}`

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/forecastgeo/:address/:params', async ({ params: { address, params } }, res) => {
  const { results } = await opencage.geocode({ q: address }).catch(err => console.log(err.message))
  const { lat, lng } = results[0].geometry
  const { data } = await axios
    .get(`${uri}/${lat},${lng}${params && '?' + params}`)
    .catch(err => console.log(err.message))
  res.json({ forecast: data, geo: results[0] })
})

app.get('/forecast/:lat/:lng/:params', async ({ params: { lat, lng, params } }, res) => {
  const { data } = await axios
    .get(`${uri}/${lat},${lng}${params && '?' + params}`)
    .catch(err => console.log(err.message))
  res.json({ forecast: data })
})

app.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}`))
