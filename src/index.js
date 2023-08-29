const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// connect to db
db.connect();

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

// support convert from Post to Put
app.use(methodOverride('_method'));

// Midle wave
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

// route init
route(app);


// test git 

app.listen(port, () =>
    console.log(`http://localhost:${port}`),
);
