var Redux = require('redux'),
    reducer = require('./reducer.js'),
    initState = require('./initialstate.js');

module.exports = Redux.createStore(reducer, initState());