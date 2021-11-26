/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

const corsOptions = {
  origin: 'https://discord-bot-web-app.herokuapp.com',
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// app.use((req, res, next) => {
//   // Website you wish to allow to connect
//   res.setHeader(
//     'Access-Control-Allow-Origin',
//     'https://discord-bot-web-app.herokuapp.com'
//   );

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

//   // Request headers you wish to allow
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'X-Requested-With,content-type'
//   );

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', false);
// });

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
