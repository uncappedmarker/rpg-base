var React = require('react');

var Link = React.createClass({
	getDefaultProps: function() {
		return {
			onClick			: null,
			className		: ""
		};
	},
	render: function() {
		return (
			<a href="javascript: void(0);" onClick={this.props.onClick} className={this.props.className}>{this.props.children}</a>
		);
	}
	
});
	
module.exports = Link;