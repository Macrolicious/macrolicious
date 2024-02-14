const express = require('express')
const path = require('path')
const router = express.Router()
const dataController = require('../controllers/dataController.js')

// router.get('/', (req, res) => {
// 	res.status(200).json({ message: 'Hitting API endpoint' })
// })

//route is currently only used for testing SQL connection - Amir[2.13@11:54]
router.get('/user', dataController.getUser, (req, res) => {
	res.status(200).json(console.log('passing through middleware'))
})

module.exports = router
