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
  origin: '*',
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
