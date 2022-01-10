//ParseDates//
exports.parseDates = (content) => {
	let strDates = "";
  let searchValue = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
  let dates = content.match(searchValue);
  switch (true) {
    case dates === null: {
      break;
    }
    case dates.length === 1: {
      strDates = dates[0];
      break;
    }
    case dates.length > 1: {
      strDates = dates.join(", ");
      break;
    }

    default:
      break;
  }
  
  return strDates;
};

//Get date
exports.getDate = () => {
	return new Date().toString().split(" ").splice(1, 3).join(" ")
}

//Added icon to object for correctly display icons

exports.addIconName = (name) => {
	let iconName = {
	  task:  {
		name: "Task",
		icon: "fas fa-shopping-cart",
	  },
	  random:{
		name: "Random",
		icon: "fas fa-brain",
	  },
	  quote:{
		name: "Quote",
		icon: "fas fa-quote-right",
	  },
	  idea: {
		name: "Idea",
		icon: "far fa-lightbulb",
	  }
	};
	return iconName[`${name}`]
  }
  
  