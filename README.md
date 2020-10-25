# NoVerde Frontend Challenge

## Solution

The proposed solution requires a protected route based on CPF auth (done locally right now).
The routes are set to be protected and based on availability of the field CPF on the AuthStore/Auth (Stored on Context/Ram).
The project was done using only the react library, and styled components for the coding part, the server part is done by a webpack from scratch based on the needs for this project.

All the buttons where debounced to avoid multiple sendings and state changes, the first 2 screens (CPF '/' and Credit '/credit) are a single field forms validated through functions and state management, while the last 2 pages are pages that adapt through the response from the Api.

This project has a mock api settings developed to multiple view testing, On the .ENV file you can set REACT_APP_MOCK_API and develop your own mock data on services/mock this can be used while testing complex screens/views for checking data.

There is a mock ci example for GCP cloud deployment.

## Installation

- Clone this repository
- Install all dependencies: `npm i`
- Set .ENV file
- `npm run dev` or `docker-compose up`
- The App should be running on `localhost:3000`

## Project structure

- src/pages are the Main Views for the pages
- src/config/routes is where you define the routes and subroutes paths for react-router-dom
- src/components are where the components should be stored
- src/components/Auth is where the authentication store is located
- src/compoenents/Stores is where you would create new Stores for Business Rules implementations
- src/services/ Are the Connection/Api through other apps should be done though
