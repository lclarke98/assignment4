const express = require('express');
const api = express.Router();
const bodyParser = require('body-parser');
module.exports = api;

let db = require('./db-inmemory')

api.get('/random', async (req, res) => {
  try {
    let role = db.roles(req.user.emails[0].value)
    if(role.includes("admin") || role.includes("user") ){
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
    res.status(202).json(await db.accessRequest(req.user.emails[0].value));
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

//-------------------------------------------------------------
api.post('/user/approve', bodyParser.text(), async (req, res) => {
  try {
    if (db.roles(req.user.emails[0].value).includes("admin")) {
      res.set('content-type', 'application/json');
      res.status(200).json(await db.aprove(req.body));
    } else {
      res.sendStatus(403);
    }
  }
  catch (e) {
    res.sendStatus(500);
  }
});


api.delete('/user/:email', bodyParser.text(), (req, res) => {
  try {
    if (db.roles(req.user.emails[0].value).includes("admin")) {
      db.delete(req.params.email);
      res.sendStatus(204)
    } else {
      res.sendStatus(403);
    }
  }
  catch (e) {
    res.sendStatus(500);
  }
});