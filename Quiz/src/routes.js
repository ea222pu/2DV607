var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Wrapper = require('./components/wrapper.js'),
    Home = require('./components/home.js'),
    Quiz = require('./components/quiz.js');

module.exports = (
    <Route path="/" component={Wrapper}>
        <IndexRoute component={Home} />
        <Route path="quiz" component={Quiz} />
    </Route>
);