const Reviews = require('../models/reviews')
require('../models/users')
const router = require('express').Router()

router.get('/', (req, res) => {
	console.log('req.query.houseID', req.query.houseID)
	Reviews.find({ house: req.query.houseID })
		.populate('author')
		.then(reviews => {
			res.send(reviews)
		})
		.catch(error => {
			console.log(error)
		})
})

module.exports = router
