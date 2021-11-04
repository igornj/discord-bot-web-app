/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

require('dotenv').config();

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('./src/Model/User');

mongoose.connect(process.env.DB_CONNECT, () => {
  console.log('Connected to DB');
});

const { uploadFile } = require('./awsUploadObjects');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { file } = req;
    await uploadFile(file);
    res.status(200).send('Arquivo enviado com sucesso');
  } catch (e) {
    res.status(400).send('Ocorreu um erro no envio do arquivo');
  }
});

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!(username && password && email)) {
    res.status(400).send('Todos os campos são requeridos');
    return;
  }

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    res.status(409).send('Usuário já existe');
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const user = new User({
      username,
      email,
      password: hashPassword,
    });
    user.save();
    res.status(200).send('Usuário criado com sucesso');
  } catch (e) {
    res.status(400).send('Ocorreu um erro na criação do usuário');
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (username === null || password === null)
    res.status(400).send('Campos vazios');

  const user = await User.findOne({ username });
  if (!user) {
    res.status(400).send('Usuário não existe');
  }

  if (password !== user.password || password === '') {
    res.status(400).send('Senha invalida');
  }

  const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);
  res.status(200).send('Login efetuado com sucesso');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
