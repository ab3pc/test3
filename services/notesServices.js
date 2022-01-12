const {v4 } = require('uuid');

const { parseDates, getDate, addIconName } = require('../helpers/index');
const { allNotes, category } = require("../repositores/variables");

let notes = allNotes;


const getAll = () => {
	return notes;
}
const getStats = () => {

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
	 
	  return categoryStat;

}
const getOne = (id) => {
	let indx = notes.findIndex(elem => elem.id === id);
	if(indx >= 0) {
		return notes[indx]
	}
	else {
	  return false
}
}

const create = ({name, content, category}) => {
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

	return newNotes;
}
const deleted = (id) => {
	const indx = notes.findIndex(elem => elem.id === id);
	if(indx >= 0) {
		notes = notes.filter(item => item.id !== id);
		return true
	}
	else {
		return false
	}

}

const edit = ({name, content, category}, id) => {
	console.log(id)
	const indx = notes.findIndex(elem => elem.id === id);
	if(indx >=0) {
		notes[indx].name = name;
		notes[indx].content = content;
		notes[indx].category = addIconName(category);
		notes[indx].dates = parseDates(content);
		return notes[indx];
} else {
	return false
}

}
const archived = (id) => {
	const indx = notes.findIndex(elem => elem.id === id);

	if(indx >= 0) {
		notes[indx].active = !notes[indx].active;
		return notes[indx]
	}
	else {
		return false
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