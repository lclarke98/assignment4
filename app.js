const express = require('express');
const app = express();
const GoogleAuth = require('simple-google-openid');
app.use(express.static('static', { extensions: ['html'] }));
app.use(GoogleAuth('849096798416-28vsr2gsrth3svbaj8920c6naqgalb27.apps.googleusercontent.com'));
// return 'Not authorized' if we don't have a user
app.use('/api', GoogleAuth.guardMiddleware(),require('./api'));
 
app.get('/api/hello', (req, res) => {
res.send('Hello ' + (req.user.displayName || 'user without a name') + '!');
 
  console.log('successful authenticated request by ' + req.user.emails[0].value);
});



//App runs on port 80
const port = process.env.PORT || 80;

app.listen(port, (err) => {
  if (err) console.log('error', err);
  else console.log(`app listening on port ${port}`);
});