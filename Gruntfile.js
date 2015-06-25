module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
    	dist: {
  			files: {
  				"build/_build.css" : "sass/main.sass"
  			}    		
    	}
    },
    babel: {
        options: {
            sourceMap: true
        },
        dist: {
            files: [
              {
                  expand: true,
                  src: ['js/src/*.js', 'js/src/**/*.js', '!js/compiled/**/*.js', '!js/compiled/*.js'],
                  dest: 'js/compiled/'
              },
            ],
        },
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/compiled/**/*.js', 'js/compiled/*.js', 'js/bootstrap.js'],
        dest: 'build/_build.js',
      },
    },
    watch: {
      files: ["sass/*.sass", "sass/**/*.sass", "js/src/**/*.js"],
      tasks: ['dev'],
      options : {
        'livereload' : true
      }
    }
  });

  grunt.registerTask('dev', ['sass', 'babel', 'concat']);
};
