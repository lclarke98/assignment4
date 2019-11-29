const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const GoogleAuth = require('simple-google-openid');
const api = require(`./api/index`);
app.use(express.static('static', { extensions: ['html'] }));
app.use(GoogleAuth('849096798416-28vsr2gsrth3svbaj8920c6naqgalb27.apps.googleusercontent.com'));
// return 'Not authorized' if we don't have a user
app.use('/api', GoogleAuth.guardMiddleware());
 
app.get('/api/hello', (req, res) => {
res.send('Hello ' + (req.user.displayName || 'user without a name') + '!');
 
  console.log('successful authenticated request by ' + req.user.emails[0].value);
});

app.get('/api/random', async (req, res) => {
  try {
    res.setHeader('content-type', 'text/plain');
    res.send(await api.randomNumber());
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.get('/api/user/roles', async (req, res) => {
  try {
    res.send(await api.roles(req.user.emails[0].value));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.post('/api/user/request', async (req, res) => {
  try {
    res.setHeader('content-type', 'application/json');
    res.send(await api.accessRequest(req.user.emails[0].value));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.get('/api/users', async (req, res) => {
  try {
    res.send(await api.userList());
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.get('/api/user/request', async (req, res) => {
  try {
    res.send(await api.userRequest());
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.post('/api/user/aprove', bodyParser.text(), (req, res) => {
  try {
    let id = "2"
    res.send(api.aprove(id));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.delete('/api/user/user1@a.b', bodyParser.text(), (req, res) => {
  try {
    let id = "2"
    res.send(api.delete(id));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

//App runs on port 80
const port = process.env.PORT || 80;

app.listen(port, (err) => {
  if (err) console.log('error', err);
  else console.log(`app listening on port ${port}`);
});