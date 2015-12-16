var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Provider = require('react-redux').Provider,
    store = require('./store.js'),
    routes = require('./routes.js');

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} />
    </Provider>,
    document.getElementById('root')
);