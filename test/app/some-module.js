QUnit.module('some', function() {
	QUnit.test('addThings(thing1, thing2)', function(assert) {
		assert.equal(app.some.addThings(1, 2), 3);
	});
});
