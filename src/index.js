const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars');
const app = express();
const port = 3000

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
    return res.render('home')
})

app.get('/news', (req, res) => {
    return res.render('news')
})

app.get('/search', (req, res) => {
    console.log(req)
    return res.render('search')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))




