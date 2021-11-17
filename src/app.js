require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Settings the views directory
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Setting the static content
// app.use(express.static(__dirname + '/public'));

app.use('/', require('./router'));

app.use((request, response, next) => response.status(404).send('404 Not Found'));
// app.use((request, response, next) => response.status(404).redirect('/'));

app.listen(port, () => {
  console.log('Node app with Express');
  console.log(`Listening at http://localhost:${port}\n`);
})