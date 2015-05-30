module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
      css: {
        files: 'src/css/*.scss',
        tasks: [],
        //tasks: ['sass', 'criticalcss', 'cssmin', 'inline']
        options: { livereload: true }
      },
      html: {
        files: 'src/*.html',
        tasks: [],
        options: { livereload: true }
      },
      js : {
        files: 'src/js/*.js',
        tasks: [],
        options: { livereload: true }
      },
      svg : {
        files: 'src/img/*.svg',
        tasks: [],
        options: { livereload: true }
      },
      livereload: {
        // Here we watch the files the sass task will compile to
        // These files are sent to the live reload server after sass compiles to them
        options: { livereload: true },
        files: ['dist/**/*'],
      }
    },
    
    connect: {
      all: {
        options:{
          port: 9000,
          hostname: '0.0.0.0',
          // Prevents Grunt to close just after the task (starting the server) completes
          // This will be removed later as `watch` will take care of that
          //keepalive: true
        }

      }
    },
    

  });

  
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  grunt.registerTask('server', ['connect','watch']);
}
