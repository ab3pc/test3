exports.allNotes =  [
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
exports.category = [
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
