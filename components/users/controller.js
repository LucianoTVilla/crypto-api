const store = require ('./store');

function addUser(newUser) {
    const user = newUser;
    return store.add(user);
}

module.exports = {
    addUser,
}