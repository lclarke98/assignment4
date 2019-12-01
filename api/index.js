const express = require('express');
const api = express.Router();
const bodyParser = require('body-parser');
module.exports = api;

let db = require('./db-inmemory')

api.get('/random', async (req, res) => {
  try {
    let role = db.roles(req.user.emails[0].value)
    console.log(role);
    if(role.includes("admin") ){
      res.set('content-type', 'text/plain');
      res.status(200).json(await db.randomNumber());
    }else{
      res.sendStatus(403)
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

api.get('/user/roles', async (req, res) => {
  try {
    res.json(await db.roles(req.user.emails[0].value));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

api.post('/user/request', async (req, res) => {
  try {
    res.set('content-type', 'application/json');
    res.send(await db.accessRequest(req.user.emails[0].value));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

api.get('/users', async (req, res) => {
  try {
    if(db.roles(req.user.emails[0].value).includes("admin")){
      res.set('content-type', 'application/json');
      res.json(await db.userList());
    }else{
      res.sendStatus(403);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

api.get('/user/request', async (req, res) => {
  try {
    if(db.roles(req.user.emails[0].value).includes("admin")){
      res.set('content-type', 'application/json');
      res.json(await db.userRequest());
    }else{
      res.sendStatus(403);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

api.post('/user/aprove', bodyParser.text(), (req, res) => {
  try {
    let id = "2"
    res.send(db.aprove(id));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

api.delete('/user/user1@a.b', bodyParser.text(), (req, res) => {
  try {
    let id = "2"
    res.send(db.delete(id));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});