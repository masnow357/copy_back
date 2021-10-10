const express = require('express');
const exphbs = require('express-handlebars');
const cors = require('cors')


const morgan = require('morgan');
const path = require('path');
// initializations

const app = express();

//settings

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

// Middleware

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())

// Global variables

app.use((req, res, next) => {
    next();
})


// Routes

app.get('/', (req, res) => {
    res.render('pages/copywrating')
})

// Copywriting routes

app.use('/copywriting', require('./routes/copiwriting/get'))
app.use('/copywriting', require('./routes/copiwriting/post'))
app.use('/copywriting', require('./routes/copiwriting/put'))
app.use('/copywriting', require('./routes/copiwriting/delete'))

// Topic routes

app.use('/topics', require('./routes/topics/get'))
app.use('/topics', require('./routes/topics/post'))
app.use('/topics', require('./routes/topics/put'))
app.use('/topics', require('./routes/topics/delete'))



// Public

app.use(express.static(path.join(__dirname, 'public')));


// Start server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})