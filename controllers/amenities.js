const Amenities = require('../models/amenities')
const router = require('express').Router()

router.get('/', (req, res) => {
	Amenities.find({}).then(amenities => {
		res.send(amenities)
	})
})

module.exports = router
