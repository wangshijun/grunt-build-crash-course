/* globals module */
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: [ "dist" ]
        },

        copy: {
            app: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: ['**/*.html', '**/*.css', '**/*.js'],
                    dest: 'dist'
                }]
            }
        },

        useminPrepare: {
            html: [ 'dist/index.html' ],
            options: {
                root: 'dist',
                dest: 'dist'
            }
        },

        usemin: {
            html: [ 'dist/index.html' ],
            options: {
                assetsDirs: 'dist/'
            }
        },

        hashres: {
            options: {
                encoding: 'utf8',
                fileNameFormat: '${name}.v${hash}.${ext}',
                renameFiles: true
            },
            dist: {
                src: [ 'dist/js/page.js', 'dist/css/page.css' ],
                dest: 'dist/index.html'
            }
        }

    });

    // 3rdparty tasks are automatically loaded
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // our tasks
    grunt.registerTask('default', [
        'clean',
        'copy',
        'useminPrepare',
        'usemin',
        'concat',
        'uglify',
        'cssmin',
        'hashres'
    ]);

};

