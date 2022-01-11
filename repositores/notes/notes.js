const {v4 } = require('uuid');
const { notesValidation } = require("../../validations/notes");
const { parseDates, getDate, addIconName } = require('../../helpers/index');
const { allNotes, category } = require("./variables");

let notes = allNotes;

const getAll = (req, res) => res.json(notes);

const getStats = (req, res) =>  {
	let categoryStat = {
		task: {active:0,archived:0},
		random: {active:0,archived:0},
		quote: {active:0,archived:0},
		idea: {active:0,archived:0},
	};
	for (let i = 0; i < category.length; i++) {
        let catTask = notes.filter(
          (item) => item.category.name === category[i].name
        );
        categoryStat[category[i].name.toLowerCase()].active = catTask.filter((item) => item.active).length;
        categoryStat[category[i].name.toLowerCase()].archived = catTask.filter((item) => !item.active).length;
      }
	  res.json(categoryStat);
}


const getOne = (req, res) => {
	let indx = notes.findIndex(elem => elem.id === req.params.id);
	if(indx >= 0) {
	  res.status(200).json(notes[indx]);
	}
	else {
	  res.json({
		  success: false,
		  message: 'Can\'t find element by ID',
	  })
	}
  
}

const create = (req,res)=> {
	
	const {error} = notesValidation(req.body);
	if(error) {
		return res.status(400).json({message: error.details[0].message})
	}
	let {name, content, category} = {...req.body};
	
	const newNotes = {
		id: v4(),
		created: getDate(),
		name,
		content,
		category: addIconName(category),
		dates:parseDates(content),
		active:true
	};

	notes.push(newNotes);
	res.status(201).json({
		success: true,
		notes: newNotes,
		message: 'Added notes!'
	})
}

const deleted = (req, res) => {
	const indx = notes.findIndex(elem => elem.id === req.params.id);
	if(indx >= 0) {
		notes = notes.filter(item => item.id !== req.params.id);
		res.status(200).json({message: 'Deleted notes!'})
	}
	else {
		res.json({
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
	let {name, content, category} = req.body;
	const indx = notes.findIndex(elem => elem.id === req.params.id);
	if(indx >=0) {
		notes[indx].name = name;
		notes[indx].content = content;
		notes[indx].category = addIconName(category);
		notes[indx].dates = parseDates(content);
	res.json({
			success: true,
			message: 'Edited!',
			notes: notes[indx]
		})
	}
	else {
		res.json({
			success: false,
			message: 'Can\'t find element by ID',
		})
	}
	
}

const archived = (req,res) => {
	const indx = notes.findIndex(elem => elem.id === req.params.id);
	console.log(indx)
	if(indx >= 0) {
		notes[indx].active = !notes[indx].active;
			res.json({
			success: true,
			message: 'Archived/UnArchived',
			notes: notes[indx]
		})
	} else {
		res.json({
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