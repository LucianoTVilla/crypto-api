const express = require('express');
const response = require('../../network');
const controller = require('./controller');
const router = express.Router();

router.post('/', addNewUser);


function addNewUser (req, res) {
    user = {
        name: req.body.name,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
    }
    controller.addUser(user)
        .then(data => {
            response.succes(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500);
        })
};


module.exports = router;