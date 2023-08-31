const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me')
const ipaRouter = require('./api')

function route(app) {
    app.use('/news', newsRouter);

    app.use('/courses', courseRouter);

    app.use('/me', meRouter)

    app.use('/', siteRouter);

    app.use('/api/v1', ipaRouter)
}

module.exports = route;
