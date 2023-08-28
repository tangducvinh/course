const express = require('express');
const router = express.Router();

const Courses = require('../app/controllers/CoursesController')

router.get('/create', Courses.create)
router.post('/store', Courses.store)
router.get('/:id/edit', Courses.edit)
router.post('/:handle-form-action', Courses.handleFormAction)
router.put('/:id', Courses.update)
router.patch('/:id', Courses.restore)
router.delete('/:id', Courses.delete)
router.delete('/:id/force', Courses.destroy)
router.get('/:slug', Courses.show)

module.exports = router;
