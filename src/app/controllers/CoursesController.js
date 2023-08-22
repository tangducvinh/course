
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
        console.log(formData)
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {})
    }
}

module.exports = new Courses
