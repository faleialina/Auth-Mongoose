const jsonwebtoken = require('jsonwebtoken');

function generateToken(data) {
    const token = jsonwebtoken.sign(JSON.stringify(data), 'secret');
    return token;
};

module.exports = { generateToken };