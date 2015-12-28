var React = require('React'),
    Link = require('react-router').Link;;

var Finished = React.createClass({
    render: function() {
        return (
            <div className="finished">
                <h1>Done!</h1>
                <p>You scored {this.props.score} out of {this.props.max}!</p>
                <Link to="/">Take another quiz</Link>
            </div>

        );
    }
});

module.exports = Finished;