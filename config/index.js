const express = require('express');
const morgan = require('morgan');
const notesRoute = require('../routes/notes');

module.exports = {
	express,
	morgan,
	notesRoute
}

