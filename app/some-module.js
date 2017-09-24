var app = app || {};

app.some = (function() {
	return {
		addThings: function(thing1, thing2) {
			return thing1 + thing2;
		},
		multiplyThings: function(thing1, thing2) {
			return thing1 * thing2;
		}
	}
})();
