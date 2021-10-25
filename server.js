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

app.use('/login', (req, res) => {
  res.send({
    token: 'test123',
  });
});

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), async (req, res) => {
  const { file } = req;
  await uploadFile(file);
  // console.log(file);

  if (res.status === 400) {
    res.send('error');
  } else {
    res.send('POST request established');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
