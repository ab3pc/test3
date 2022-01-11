const Joi = require('joi');

exports.notesValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().min(3).max(15).required(),
		content: Joi.string().min(3).max(30).required(),
		category: Joi.string().min(3).max(6).valid('task','random','idea', 'quote').required(),
	})
	return schema.validate(data)
}
