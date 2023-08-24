
const Course = require('../models/Course')

class Courses {
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => 
                res.render('courses/show', {
                    course: course.toObject()
                })
            )
            .catch(next)
    }

    create(req, res) {
        res.render('courses/create')
    }

    store(req, res) {
        const course = new Course(req.body)
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {})
    }

    edit(req, res, next) {
        Course.findOne({_id: req.params.id})
            .then(courses => res.render('courses/edit', {courses: courses.toObject()}))
            .catch(next)
    }

    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/courses'))
            .catch(next)
    }

    delete(req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/me/courses'))
            .catch(next)
    }
}

module.exports = new Courses
