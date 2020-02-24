const Types = require('../models/types')
const router = require('express').Router()

router.get('/', (req, res) => {
	Types.find({}).then(types => {
		res.send(types)
	})
})

module.exports = router
