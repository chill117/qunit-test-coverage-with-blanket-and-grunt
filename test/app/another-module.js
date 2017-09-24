QUnit.module('another', function() {
	QUnit.test('doSomething(input)', function(assert) {
		assert.equal(app.another.doSomething(), 'some-default-output');
	});
});

