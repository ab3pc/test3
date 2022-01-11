const Joi = require('joi');

exports.notesValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().min(3).max(15).required(),
	//	created: Joi.string().min(5).max(20).required(),
		content: Joi.string().min(3).max(30).required(),
		//dates: Joi.string().min(8).max(10).required().pattern(/(\d{1,2}\/\d{1,2}\/\d{4})/g),
		category: Joi.string().min(3).max(6).valid('task','random','idea', 'quote').required(),
		//active: Joi.boolean().required()
	})
	return schema.validate(data)
}
