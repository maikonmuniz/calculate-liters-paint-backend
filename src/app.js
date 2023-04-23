const express = require('express');
const app = express();
const port = 8080;
const userRoutes = require('./routes/user/routesUser.js');

// config json response
app.use(express.json());

// config cors
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use('/users', userRoutes);

app.listen(port, () => console.log('listening at http://localhost:8080'));