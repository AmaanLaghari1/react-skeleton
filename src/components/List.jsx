var React = require('react');
var ListItem = require('./ListItem.jsx');
var CreateReactClass = require('create-react-class');

var ingredients = [{'id': 1, 'text': 'Tomato'}, {'id': 2, 'text':'Potato'}, {'id': 3, 'text': 'Chilie'}];
var List = CreateReactClass({
    render: function(){
        var listItems = ingredients.map((item) => {
        return (
            <ListItem key={item.id} ingredient={item.text} />
        );
     });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;