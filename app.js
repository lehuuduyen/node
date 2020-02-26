const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const router = require('./routers/router_main.js');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();
const port = process.env.PORT || 8000 ;


//db
mongoose.connect(process.env.MONGO_URI,
	{useNewUrlParser: true, useUnifiedTopology: true  }).then(() =>
	console.log('DB conected')
)

mongoose.connection.on('error',err =>{
	console.log(`DB connection errorn  ${err}`)
})

app.use(morgan('dev'))
app.use(bodyParser.json());

app.use(router);


app.listen(port, () => console.log(`Connect to port ${port}`))
