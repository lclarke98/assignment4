const express = require('express');
const api = express.Router();
const bodyParser = require('body-parser');
module.exports = api;

let db = require('./db-inmemory')

//done
api.get('/random', async (req, res) => {
  try {
    res.set('content-type', 'text/plain');
    res.send(await db.randomNumber(req.user.emails[0].value));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

//done
api.get('/user/roles', async (req, res) => {
  try {
    res.json(await db.roles(req.user.emails[0].value));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

//done
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
      res.set('content-type', 'application/json');
      res.send(await db.userList(req.user.emails[0].value));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

api.get('/user/request', async (req, res) => {
  try {
      res.set('content-type', 'application/json');
      res.send(await db.userRequest(req.user.emails[0].value));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

//-------------------------------------------------------------
api.post('/user/approve', bodyParser.text(), async (req, res) => {
  try {
      res.set('content-type', 'application/json');
      res.send(await db.aprove(req.user.emails[0].value,req.body));

  }
  catch (e) {
    res.sendStatus(500);
  }
});


api.delete('/user/:email', bodyParser.text(), (req, res) => {
  try {
      db.delete(req.user.emails[0].value, req.params.email);
      res.sendStatus(204)
  }
  catch (e) {
    res.sendStatus(500);
  }
});