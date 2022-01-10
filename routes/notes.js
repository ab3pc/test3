const express = require('express');
const {v4 } = require('uuid');
const { parseDates, getDate, addIconName } = require('../helpers/index');
const { category, allNotes } = require('../repositores/notes/variables');
const router = express.Router()

const notes = allNotes;


  //GET ALL NOTES
  router.get('/', (req, res) => {
	res.status(200).json(notes);
	//res.send(notes);
});
  //GET STATS
  router.get('/stats', (req, res) => {
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
});

  //GET RETRIEVE
  router.get('/:id', (req, res) => {
	let currentNote = notes.find(item => item.id === Number(req.params.id));
res.status(200).json(currentNote);
});

//POST Add notes
router.post('/', (req,res)=> {
	let {name, content, category} = {...req.body};
	
	const newNotes = {
		id: v4(),
		date: getDate(),
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
})

//DELETE
router.delete('/:id', (req, res) => {
	notes = notes.filter(item => item.id !== Number(req.params.id));
	res.status(200).json({message: 'Deleted notes!'})
})

//PATCH
router.patch('/:id', (req, res) => {
	let item = notes.find(elem => elem.id ===Number(req.params.id));
	let {name, content, category} = req.body;

	console.log(name, content, category)
	res.json(item)
})

module.exports = router