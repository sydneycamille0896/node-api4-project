const Users = require('../users/users-model');

const validateUserData = (req, res, next) => {
    const { username, password } = req.body;
    if(!username || !password){
        return res.status(400).json({message: `Missing username or password`})
    }
    next();
};

const validateLogin = (req,res,next) => {
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({message: `Username and password are required.`});
    }

    const user = Users.getByCreds(username,password);
    if(!user){
        return res.status(401).json({message: `Invalid credentials.`});
    }
    
    req.user = user;
    next();
};

module.exports = {
    validateUserData,
    validateLogin
}