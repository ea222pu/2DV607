var React = require('react'),
    Link = require('react-router').Link;

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Welcome</h1>
                <Link to="quiz">Begin quiz</Link>
            </div>
        );
    }
});

module.exports = Home;