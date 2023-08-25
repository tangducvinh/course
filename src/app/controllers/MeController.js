
const Courses = require('../models/Course')

class Me {
    show(req, res, next) {
        Courses.find({})
            .then(courses => {
                courses = courses.map(course => course.toObject())
                
                res.render('me/courses', {
                    courses
                })
            })
            .catch(next)
    }

    trash(req, res, next) {
        Courses.findWithDeleted({deleted: true})
            .then(courses => {
                courses = courses.map(course => course.toObject())
                
                res.render('me/trashCourse', {
                    courses
                })
            })
            .catch(next)
    }
}

module.exports = new Me