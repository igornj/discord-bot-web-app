/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import { config, S3 } from 'aws-sdk';

require('dotenv').config();

config.update({ region: 'us-east-2' });

const ACCESS_KEY_ID = process.env.aws_access_key_id;
const SECRET_ACCESS_KEY = process.env.aws_secret_access_key;
const BUCKET_NAME = process.env.aws_bucket_name;
const REGION = process.env.aws_bucket_region;

const s3 = new S3({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  Bucket: BUCKET_NAME,
});

const params = {
  Bucket: 'upperphotos',
  Prefix: 'Upper_data_base/',
};

export async function readFiles() {
  try {
    const s3Data = await s3Files();
    return s3Data;
  } catch (e) {
    console.log(`Faiou: ${e}`);
  }
}

const arrayFilesS3 = [];
const s3Files = () => {
  return new Promise(function (resolve, reject) {
    s3.listObjectsV2(params, function (err, data) {
      if (err) reject(err);

      data.Contents.forEach(function (obj) {
        arrayFilesS3.push(obj.Key);

        resolve(arrayFilesS3);
      });
    });
  });
};
