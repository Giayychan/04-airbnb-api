const Houses = require('../models/houses')
const router = require('express').Router()

router.get('/', (req, res) => {
	Houses.find({})
		.then(houses => {
			// Set first of images as 'image'
			res.send(houses)
		})
		.catch(err => {
			res.send(err)
		})
})

router.get('/:id', (req, res) => {
	Houses.findById(req.params.id)
		.then(house => {
			res.send(house)
		})
		.catch(err => {
			res.send(err)
		})
})

module.exports = router
