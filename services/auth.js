const jwt = require('jsonwebtoken');
<<<<<<< HEAD
const secretKey = 'Sahil@123';

function setUser(user){
       try{
        return jwt.sign({
            _id: user._id,
            email:user.email,
            role:user.role,
            
        },secretKey)
       }
       catch(error){
        return error;
       }
}
function getUser(token){
    if(!token) return null;
    try {
        return jwt.verify(token,secretKey);   

    } catch (error) {
    return {error: 'token is invalid'};         
    }}

module.exports={
    setUser,
    getUser
}
=======
const secret = 'sahil$@123'
function setUser( user) {
    return jwt.sign({
        _id : user._id,
        email: user.email,
    },secret);
}

function getUser(token) {
    if(!token) return null;
    try {
        return jwt.verify(token, secret);

    } catch (error) {
        return null;
    }
}
module.exports ={
  setUser,
  getUser,
};
>>>>>>> 1bf548fbb1d3199e6ffe89379facae0f3c3c909b
