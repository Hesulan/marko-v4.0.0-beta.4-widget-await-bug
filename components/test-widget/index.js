module.exports = require('marko/widgets').defineComponent({
	template: require('./template.marko'),
	getInitialState: function(input) {
		return {
			clickCount: 0
		};
	},
	handleButtonClick: function(event, el) {
		this.setState('clickCount', this.state.clickCount + 1);
	}
});
