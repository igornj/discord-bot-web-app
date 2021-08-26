/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

require('dotenv').config();

const express = require('express');
const multer = require('multer');
const cors = require('cors');

const { uploadFile } = require('./awsUploadObjects');

const app = express();
app.use(cors());
app.use('/', express.static('./build'));

const upload = multer({ dest: 'uploads/' });
const port = process.env.PORT || 3000;

app.post(
  'https://discord-bot-upload.herokuapp.com/',
  upload.single('file'),
  async (req, res) => {
    const { file } = req;
    const result = await uploadFile(file);
    console.log(result);

    if (res.status === 400) {
      res.send('error');
    } else {
      res.send('POST request established');
    }
  }
);

app.listen(port, () => {
  console.log(`App running on port: ${port} http://localhost:${port}/`);
});
