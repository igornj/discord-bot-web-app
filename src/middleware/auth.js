/* eslint-disable no-unused-vars */
const jwt = require('jsonwebtoken');

require('dotenv').config();

/* const verifyToken = (req, res) => {
  const token = req.headers['auth-token'];

  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decoded;
    return true; // res.status(200).send('Token is valid');
  } catch (e) {
    return false; // res.status(401).send('Invalid Token');
  }
};
 */

const verifyToken = () => true;

module.exports = verifyToken;
