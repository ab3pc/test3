const express = require('express');
const router = express.Router();
const notes = require('../repositores/notes/notes');


 
router.get('/', notes.getAll)
	.get('/stats', notes.getStats)
	.get('/:id', notes.getOne)
	.post('/', notes.create)
	.delete('/:id', notes.deleted)
	.patch('/:id', notes.edit)
	.put('/:id', notes.archived)

module.exports = router