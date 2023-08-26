
const Courses = require('../models/Course')

class Me {
    show(req, res, next) {
        Promise.all([Courses.find({}), Courses.countDocumentsWithDeleted({deleted: true})])
            .then(([courses, deleteCount]) => {
                courses = courses.map(course => course.toObject())
                res.render('me/courses', {
                    deleteCount,
                    courses
                })
            }
        )
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