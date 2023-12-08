const jwt = require("jsonwebtoken");
const { SECRET_KEY, TOKEN_EXPIRATION } = require("../config");


function createToken(username, admin = false) {
  let payload = { username, admin };
  let options = { expiresIn: TOKEN_EXPIRATION || "1d" }; // Set a default expiration of 1 day

  return jwt.sign(payload, SECRET_KEY, options);
}

module.exports = createToken;
