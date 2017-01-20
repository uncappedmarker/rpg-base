var React = require('react');

let ViewMain = require("View-main")

var App = React.createClass({
	getInitialState: function() {
		return {
			view : "main"
		};
	},
	render: function() {
		switch(this.state.view) {
			case "main":
				return (
					<ViewMain />
				);
				break;
			default:
				return (
					<h1>nothing!</h1>
				);
		}
		
	}
	
});
	
module.exports = App;