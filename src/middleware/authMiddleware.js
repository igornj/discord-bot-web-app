/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
require('dotenv').config();
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split[' '][1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, 'private', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
module.exports = verifyToken;
/*   const { token } = req.body;

  if (!token) {
    return res.sendStatus(401);
  }

  // const [, token] = authorization.split(' ');

  try {
    jwt.verify(
      token,
      'AISDJAJJ289J98YQ239RU28J-DFIJK2F23F4239F4894SD8941AS98D49'
    );
    return next();
  } catch (err) {
    return res.sendStatus(401);
  } */

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
