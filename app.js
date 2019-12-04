const express = require('express');
const app = express();
const GoogleAuth = require('simple-google-openid');
app.use(express.static('static', { extensions: ['html'] }));
app.use(GoogleAuth('849096798416-71hedeb8diorogkd025e449g55oeo72p.apps.googleusercontent.com'));

// return 'Not authorized' no user logged in
app.use('/api', GoogleAuth.guardMiddleware(),require('./api'));




//App runs on port 80
const port = process.env.PORT || 80;

app.listen(port, (err) => {
  if (err) console.log('error', err);
  else console.log(`app listening on port ${port}`);
});