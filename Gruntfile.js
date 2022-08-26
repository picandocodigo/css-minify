module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: {
          'build/style.css' : ['src/*css']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['cssmin']);
};
