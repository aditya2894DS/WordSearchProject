const accessTokenSecret = require('./constants').accessTokenSecret
var jwt = require('jsonwebtoken')

// middleware to validate jwt token
const authenticateJWT = function(req, res, next){
  const authHeader = req.headers.authorization
  
  if(authHeader){
    jwt.verify(authHeader, accessTokenSecret, (err, JWTToken) => {
      if(err){ return res.sendStatus(403).send(err) }
      req.currentUser = JWTToken
      next();
    })
  }else { 
    res.sendStatus(401) }
  }

// middleware for running through savedby array and return result
const isSavedBy = (array, toMatch) => {
  let result = false;
  let item = 0;
  for(item; item < array.length; item++){
    if(array[item].toString() === toMatch){
      result = true
      return result }}
  return result }

module.exports = {
  authenticateJWT: authenticateJWT,
  isSavedBy: isSavedBy
}
