/* eslint-disable no-unused-vars */
require('dotenv').config();

const express = require('express');
const multer = require('multer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { uploadFile } = require('./awsUploadObjects');
const User = require('./src/Model/User');
const authMiddleware = require('./src/middleware/authMiddleware');

const router = express.Router();
// router.use(authMiddleware);

const upload = multer({ dest: 'uploads/' });
router.post(
  '/upload',
  authMiddleware,
  upload.single('file'),
  async (req, res) => {
    try {
      const { file } = req;
      await uploadFile(file);
      res.status(200).send('Arquivo enviado com sucesso');
    } catch (e) {
      res.status(400).send('Ocorreu um erro no envio do arquivo');
    }
  }
);

router.post('/register', async (req, res) => {
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

router.post('/login', async (req, res) => {
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

  const token = jwt.sign({ username }, 'private');

  res.json({ token });
  // res.status(200).send('Login efetuado com sucesso');

  // const token = jwt.sign({ _id: username.id }, process.env.TOKEN_SECRET);
  // req.header('authorization', token);
});

module.exports = router;
