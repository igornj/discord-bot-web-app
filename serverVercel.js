/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

module.exports = app;
