require('dotenv').config();

const config = require('./config');
const app = config.express();

const PORT = process.env.PORT || 3001;
app.use(config.morgan(process.env.LOG_LEVEL))
app.use(config.express.urlencoded({extended:false}))// req.body parce
app.use(config.express.json());// I can work with req, and can send JSON and throuth form

app.use('/api/notes', config.notesRoute)

app.listen(PORT, process.env.DOMAIN, (error) => {
	error ? console.log(error) : console.log(`Listening port ${PORT}`)
});
