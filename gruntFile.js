module.exports = function(grunt) {

	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 3000,
					base: '.'
				}
			}
		},
		qunit: {
			coverage: {
				options: {
					urls: ['http://localhost:3000/test/coverage.html?coverage']
				}
			}
		}
	});

	grunt.registerTask('coverage', [
		'connect:server',
		'qunit:coverage'
	]);

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.event.on('qunit.report', function(data) {
		grunt.file.write('coverage-report.json', JSON.stringify(data, null, 2));
		process.exit(0);
	});
};
