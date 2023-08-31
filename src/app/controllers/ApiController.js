
const Course = require('../models/Course')

class IpaController {
    getAllData(req, res, next) {
        Course.find({})
            .then(courses => {
                res.status(200).json({
                    message: "ok",
                    courses
                })
            })
            .catch(next)
    }

    createData(req, res, next) {
        const course = new Course(req.body)
        course.save()
        Course.find({})
            .then(courses => {
                res.status(200).json({
                    message: "ok",
                    courses
                })
            })
            .catch(next)
    }

    deleteData(req, res, next) {
        Course.delete({_id: req.params.id})
            .then(() => {
                res.status(200).json({
                    message: "deleted"
                })
            })
            .catch(next)
    }

    updataData(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => {
                res.status(200).json({
                    message: "updated"
                })
            })
            .catch(next)
    }
}

module.exports = new IpaController