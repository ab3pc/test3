require('dotenv').config()
const express = require('express');
const app = express();
const morgan = require('morgan');


const PORT = process.env.PORT || 3001;
app.use(morgan(process.env.LOG_LEVEL))
app.use(express.urlencoded({extended:false}))// req.body parce
app.use(express.json());// I can work with req, and can send JSON and throuth form

const notesRoute = require('./routes/notes')

app.use('/api/notes', notesRoute)

app.listen(PORT, process.env.DOMAIN, (error) => {
	error ? console.log(error) : console.log(`Listening port ${PORT}`)
});
