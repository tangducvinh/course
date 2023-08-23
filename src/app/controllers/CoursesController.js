
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
        const formData = req.body
        formData.image = 'https://th.bing.com/th/id/OIP.QoTEZySktID2bx2HZOAFSAHaEK?pid=ImgDet&rs=1'
        const course = new Course(formData)
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
}

module.exports = new Courses
