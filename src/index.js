const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const app = express();
const port = 3000;

const SortMiddlewaves = require('./app/middlewaves/SortMiddlewaves')

const route = require('./routes');
const db = require('./config/db');

// connect to db
db.connect();

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

// support convert from Post to Put
app.use(methodOverride('_method'));

//Midle wave
app.use(SortMiddlewaves)
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
            sortable: (field, sort) => {
                const currentType = field === sort.column ? sort.type : 'default'

                const icons = {
                    default: 'ti-arrows-vertical',
                    asc: 'ti-arrow-up',
                    desc: 'ti-arrow-down',
                }

                const types = {
                    default: 'desc',
                    desc: 'asc',
                    asc: 'desc',
                }

                const type = types[currentType]
                const icon = icons[currentType]
                
                return `<a href="?_sort&column=${field}&type=${type}">
                    <i class=${icon}></i>
                </a>`
            }
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

// route init
route(app);

app.listen(port, () =>
    console.log(`http://localhost:${port}`),
);
