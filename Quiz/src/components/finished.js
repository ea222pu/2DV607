var React = require('React');

var Finished = React.createClass({
    render: function() {
        return (
            <div className="finished">
                <h1>Done!</h1>
                <p>You scored {this.props.score} out of {this.props.max}!</p>
            </div>

        );
    }
});

module.exports = Finished;