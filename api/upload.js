const { uploadFile } = require('../awsUploadObjects');

module.exports = async (req, res) => {
  try {
    const { file } = req;
    await uploadFile(file);
    res.status(200).send('Arquivo enviado com sucesso');
  } catch (e) {
    res.status(400).send('Ocorreu um erro no envio do arquivo');
  }
};
