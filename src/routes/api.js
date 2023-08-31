const express = require('express')
const router = express.Router()

const IpaController = require('../app/controllers/ApiController')

router.get('/data', IpaController.getAllData)
router.post('/create-data', IpaController.createData)
router.delete('/delete/:id', IpaController.deleteData)
router.put('/update/:id', IpaController.updataData)

module.exports = router