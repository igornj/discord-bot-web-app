/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
require('dotenv').config();
const fs = require('fs');

const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const ACCESS_KEY_ID = process.env.aws_access_key_id;
const SECRET_ACCESS_KEY = process.env.aws_secret_access_key;
const BUCKET_NAME = process.env.aws_bucket_name;
const REGION = process.env.aws_bucket_region;

const s3 = new AWS.S3({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  Bucket: BUCKET_NAME,
});

async function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const params = {
    Bucket: BUCKET_NAME,
    Body: fileStream,
    Key: `Upper_data_base/${file.originalname}`,
    ACL: 'public-read',
    ContentType: 'image/jpg',
    ContentDisposition: 'inline',
  };

  return s3.upload(params).promise();
}

exports.uploadFile = uploadFile;

// Pegando o arquivo
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
// upload.single('file')

app.get('/upload', async (req, res) => {
  try {
    const { file } = req;
    await uploadFile(file);
    res.status(200).send('Arquivo enviado com sucesso');
  } catch (e) {
    res.status(400).send('Ocorreu um erro no envio do arquivo');
  }
});

exports.app = functions.https.onRequest(app);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info('Hello logs!', { structuredData: true });
//   response.send('Hello from Firebase!');
// });

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
