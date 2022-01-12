notesServices = require('../services/notesServices')
const { notesValidation } = require("../validations/notes");

const getAll = (req, res) => {
	const notes = notesServices.getAll();
	res.json(notes)};

const getStats = (req, res) =>  {
	const categoryStat = notesServices.getStats();
	  res.json(categoryStat);
}

const getOne = (req, res) => {
	const findNotes = notesServices.getOne(req.params.id);
		if(!findNotes) {
			res.status(400).json({
		  success: false,
		  message: 'Can\'t find element by ID',
	  })
	}
	 else {
		res.json(findNotes);
	 }
		}

const create = (req,res)=> {
		const {error} = notesValidation(req.body);
	if(error) {
		return res.status(400).json({message: error.details[0].message})
	}

	const newNotes = notesServices.create({...req.body});

	res.status(201).json({
		success: true,
		notes: newNotes,
		message: 'Added notes!'
	})
}

const deleted = (req, res) => {
	const findNotes = notesServices.deleted(req.params.id);

	if(findNotes) {
		
		res.status(200).json({message: 'Deleted notes!'})
	}
	else {
		res.status(400).json({
			success: false,
			message: 'Can\'t find element by ID',
		})
	}

}

const edit = (req, res) => {
	const {error} = notesValidation(req.body)
	if(error) {
		return res.status(400).json({message: error.details[0].message})
	};

	let editedNotes = notesServices.edit({...req.body},req.params.id)
	if(editedNotes) {
		res.json({
			success: true,
			message: 'Edited!',
			notes: editedNotes
		})
	}

	else {
		res.status(400).json({
			success: false,
			message: 'Can\'t find element by ID',
		})
	}

	}


const archived = (req,res) => {
	const notesArch = notesServices.archived(req.params.id)
	if(notesArch) {
		res.json({
			success: true,
			message: 'Archived/UnArchived',
			notes: notesArch
		})
	}
	 else {
		res.status(400).json({
			success: false,
			message: 'Can\'t find element by ID'
		})
	}

}

module.exports = 
{
	getAll,
	getStats,
	getOne,
	create,
	deleted,
	edit,
	archived
}