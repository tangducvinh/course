const express = require('express');
const router = express.Router();

const Courses = require('../app/controllers/CoursesController')

router.get('/create', Courses.create)
router.post('/store', Courses.store)
router.get('/:id/edit', Courses.edit)
router.put('/:id', Courses.update)
router.delete('/:id', Courses.delete)
router.get('/:slug', Courses.show)

module.exports = router;
