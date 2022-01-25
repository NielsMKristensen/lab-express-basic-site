//get express
const express = require('express');
const app = express();

//enable static on public folder
app.use(express.static('public'));


//home
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

//about
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

//Work
app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work.html'));

//start server
app.listen(3000, () => console.log('My first app listening on port 3000! '));