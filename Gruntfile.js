module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        uglify:{
            js:{
                files:{
                    'dist/jquery.detectfont.min.js':[
                        'src/jquery.detectfont.js'
                    ]
                }
            }
        },
        watch:{
            all:{
                files:['src/**/*'],
                tasks:['build']
            }
        }
    });
    
    grunt.registerTask('build', ['uglify:js']);
    grunt.registerTask('default', ['build', 'watch:all']);
};
