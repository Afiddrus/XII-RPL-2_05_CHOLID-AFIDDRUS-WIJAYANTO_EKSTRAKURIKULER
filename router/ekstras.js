const express = require('express')
const router = express.Router()

const ekstracontroller = require ('../controllers/ekstras')

router.get('/ekstras', ekstracontroller.index)

router.get('/ekstra/:id', ekstracontroller.show)

router.post('/ekstra', ekstracontroller.store)

router.put('/ekstra/:id', ekstracontroller.update)

router.delete('/ekstra/:id', ekstracontroller.delete)
module.exports = router