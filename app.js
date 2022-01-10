const express = require('express');
const {v4 } = require('uuid');
const app = express();
const morgan = require('morgan')
const PORT = 3001;
//{notesValidation} = require('./validations/notes');
app.listen(PORT, 'localhost', (error) => {
	error ? console.log(error) : console.log(`Listening port ${PORT}`)
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

let  notes =  [
	{
	  id: 1,
	  name: "Shopping list",
	  created: "May 05, 2021",
	  category: { name: "Task", icon: "fas fa-shopping-cart" },

	  content: "Some Text",
	  dates: "3/5/2021",
	  active: true,
	},
	{
	  id: 2,
	  name: "The theory of evolution",
	  created: "May 07, 2021",
	  category: { name: "Random", icon: "fas fa-brain"},
	  content: "The theory of evolu...",
	  dates: "",
	  active: true,
	},
	{
	  id: 3,
	  name: "New Feature",
	  created: "Jun 01, 2021",
	  category: { name: "Idea", icon: "far fa-lightbulb" },
	  content: "New Feature",
	  dates: "",
	  active: true,
	},
	{
	  id: 4,
	  name: "Bruce Lee",
	  created: "Jun 02, 2021",
	  category: { name: "Quote", icon: "fas fa-quote-right" },
	  content: "Be like water !",
	  dates: "",
	  active: true,
	},
	{
	  id: 5,
	  name: "Books",
	  created: "Jun 03, 2021",
	  category: { name: "Task", icon: "fas fa-shopping-cart" },
	  content: "Buy some about JS",
	  dates: "",
	  active: true,
	},
	{
	  id: 6,
	  name: "Archived Archived",
	  created: "Jan 01, 2021",
	  category: { name: "Task", icon: "fas fa-shopping-cart" },
	  content: "I haven't idea :)",
	  dates: "",
	  active: false,
	},
	{
	  id: 7,
	  name: "Another Archived notes",
	  created: "Jan 03, 2022",
	  category: { name: "Quote", icon: "fas fa-quote-right" },
	  content: "I need more information",
	  dates: "",
	  active: false,
	}
];
const category = [
	{
	  name: "Task",
	  icon: "fas fa-shopping-cart",
	},
	{
	  name: "Random",
	  icon: "fas fa-brain",
	},
	{
	  name: "Quote",
	  icon: "fas fa-quote-right",
	},
	{
	  name: "Idea",
	  icon: "far fa-lightbulb",
	},
  ]

//app.use(express.json());// I can work with req

  //GET ALL NOTES
app.get('/notes', (req, res) => {
	res.status(200).json(notes);
	//res.send(notes);
});
  //GET RETRIEVE
app.get('/notes/:id', (req, res) => {
		let currentNote = notes.find(item => item.id === Number(req.params.id));
	res.status(200).json(currentNote);
});

  //GET STATS
app.get('/notes/stats', (req, res) => {
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
        categoryStat[category[i].name.toLowerCase()].active = catTask.filter(
          (item) => item.active
        ).length;
        categoryStat[category[i].name.toLowerCase()].archived = catTask.filter(
          (item) => !item.active
        ).length;
		console.log(catTask)
      }
	  res.json(categoryStat);
});

//POST
app.post('/notes', (req,res)=> {
	const newNotes = {...req.body, id: v4(), active:true};
	notes.push(newNotes);
	res.status(201).json({
		success: true,
		notes: newNotes,
		message: 'Added notes!'
	})
})

//DELETE
app.delete('/notes/:id', (req, res) => {
	notes = notes.filter(item => item.id !==req.params.id);
	res.status(200).json({message: 'Deleted notes!'})
})

//PATCH
app.patch('/notes/:id', (req, res) => {
	const indx = notes.findIndex(a=>a.id === req.params.id);
	notes[indx] = req.body;
	res.json(notes[indx])
})
