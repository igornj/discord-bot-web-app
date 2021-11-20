const multer = require('multer');
const router = require('express').Router();
const { uploadFile } = require('../awsUploadObjects');

const upload = multer({ dest: 'uploads/' });
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { file } = req;
    await uploadFile(file);
    res.status(200).send('Arquivo enviado com sucesso');
  } catch (e) {
    res.status(400).send('Ocorreu um erro no envio do arquivo');
  }
});

module.exports = router;
