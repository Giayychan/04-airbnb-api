const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('reviews', {
	house: {
		type: ObjectId,
		ref: 'houses'
	},
	author: {
		type: ObjectId,
		ref: 'users'
	},
	rating: {
		type: Number,
		default: 0
	},
	content: {
		type: String,
		required: [true, 'content is required']
	}
})
