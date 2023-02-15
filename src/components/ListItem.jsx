var React = require('react');
var CreateReactClass = require('create-react-class');

var ListItem = CreateReactClass({
    render: function(){
        return (
            <li>
                <h2>{this.props.ingredient}</h2>
            </li>
        );
    }
});

module.exports = ListItem;