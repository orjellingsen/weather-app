require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')

const uri = `https://api.darksky.net/forecast/${process.env.API_KEY}`
const apiParams = `?lang=no`

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/forecast/:lat/:lng/:params', async ({ params: { lat, lng, params } }, res) => {
  const { data } = await axios
    .get(`${uri}/${lat},${lng}${params ? `?${params}` : ''}`)
    .catch(error => console.log(error))
  res.json(data)
})

app.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}`))
