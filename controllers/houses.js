const Houses = require('../models/houses')
require('../models/types')
const router = require('express').Router()

router.get('/', (req, res) => {
	Houses.find({})
		.select('title type bedrooms city region price rating images lat lng')
		.populate('type amenities')
		.lean()
		.then(houses => {
			res.send(houses)
		})
		.catch(err => {
			res.send(err)
		})
})

router.get('/:id', (req, res) => {
	Houses.findById(req.params.id)
		.populate('host type amenities')
		.then(house => {
			res.send(house)
		})
		.catch(err => {
			res.send(err)
		})
})

module.exports = router
