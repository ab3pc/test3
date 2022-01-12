const express = require('express');
const router = express.Router();
const notesController = require('../repositores/notesController');


router.get('/', notesController.getAll)
	.get('/stats', notesController.getStats)
	.get('/:id', notesController.getOne)
	.post('/', notesController.create)
	.delete('/:id', notesController.deleted)
	.patch('/:id', notesController.edit)
	.put('/:id', notesController.archived)

module.exports = router