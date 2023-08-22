const express = require('express');
const router = express.Router();

const Courses = require('../app/controllers/CoursesController')

router.get('/create', Courses.create)
router.post('/store', Courses.store)
router.get('/:slug', Courses.show)

module.exports = router;
