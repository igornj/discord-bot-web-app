/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect(process.env.DB_CONNECT, () => {
  console.log('Connected to DB');
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
