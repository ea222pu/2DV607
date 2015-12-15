var Redux = require('redux'),
    initState = require('./initialstate.js'),
    reducer = require('./reducer.js');

module.exports = Redux.createStore(reducer);