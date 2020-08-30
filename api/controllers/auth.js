const JWT = require('jsonwebtoken');
const SECRET = "Anything really!"

module.exports.verifyToken = (req, res, token, next) => {
    JWT.verify(token, SECRET, (err, decodedToken) =>{
        if(err){
            return next(err);
        }
        return next();
    })
}