const express = require('express');
const bodyParser = require('body-parser');
const api = express.Router();
module.exports = api;
const db = require(`./db-inmemory`);

let loginToken = false;

api.get('/:random', (req, res) => {
    
    if(!loginToken){
        console.log("No Token")
        res.sendStatus(401)
    }
    else{
        console.log("random");
    }
});

api.get('/:user/roles', bodyParser.text(), (req, res) => {
    console.log("roles")
});

api.post('/:user/request', bodyParser.text(), (req, res) => {
    console.log("request")
});

api.get('/:users', bodyParser.text(), (req, res) => {
    console.log("users")
});

api.get('/:user/request', bodyParser.text(), (req, res) => {
    console.log("request list")
});

api.post('/:user/aprove', bodyParser.text(), (req, res) => {
    console.log("aprove user")
});

api.delete('/:user/user1@a.b', bodyParser.text(), (req, res) => {
    console.log("delete")
});