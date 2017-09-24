var app = app || {};

app.another = (function() {
	return {
		doSomething: function(input) {
			if (typeof input === 'string') {
				return 'some-output-if-string';
			}
			return 'some-default-output';
		}
	}
})();
