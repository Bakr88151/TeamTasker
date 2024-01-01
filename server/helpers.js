const crypto = require('crypto');

function md5Hash(password) {
    const md5Hash = crypto.createHash('md5').update(password).digest('hex');
    return md5Hash;
}

module.exports = md5Hash