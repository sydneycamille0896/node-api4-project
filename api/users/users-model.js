const data = require('../data');

const getAll = () => {
    return data;
}

const getByCreds = (username,password) => {
    return data.find(user => user.username === username && user.password === password);
}


const createUser = (user) => {
    data.push(user);
    return user;
}

const login = (user) => {
    return 'Welcome!';
}

module.exports = {
    getAll,
    getByCreds,
    createUser,
    login
};
