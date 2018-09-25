# React workshop - Weather App
We will create an app that can display live weather data for a chosen area as well as a detailed view for a given day.

The app will use data from the [Dark-Sky API](https://darksky.net/dev).

If you need to convert an address to lat/lng coordinates on the frontend, [OpenCage](https://opencagedata.com/) is a great free alternative for looking this up.

Since this workshop is mainly about using React, we have included a simple API to to proxy the requests done to the DarkSky API.

## Getting Started
To get started, clone this repository, cd into the frontend folder and type `npm install`. When it is finished, type `npm run start`.

In a seperate terminal window, cd into the backend folder of the project and type `npm install` then `npm run start` to run the server locally.


## Backend
The backend have two endpoints:

`/forecast/:lat/:lng/:params` returns an object with the forecast for the given coordinates

`/forecast/:address/:params`  returns an object with the forecast of the location as well as information about the location

valid parameters can be found in the DarkSky documentation and should be supplied as a string without the question mark.

## Tools and Libraries
* [create-react-app](https://github.com/facebook/create-react-app) to bootstrap the app
* [Styled Components (v4)](https://www.styled-components.com/) for all styling
* [Reach Router](https://reach.tech/router)
* [Downshift](https://github.com/paypal/downshift)