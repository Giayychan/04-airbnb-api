const Reviews = require('../models/reviews')
require('../models/users')
const router = require('express').Router()

router.get('/', (req, res) => {
	console.log('req.query', req.query)
	Reviews.find(req.query)
		.populate('author')
		.then(reviews => {
			res.send(reviews)
		})
		.catch(error => {
			console.log(error)
		})
})

module.exports = router
