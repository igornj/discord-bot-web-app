const vercel = require('../serverVercel');
const route = require('../routes/upload');

vercel.use('/api/', route);

module.exports = route;
