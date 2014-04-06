/* globals module */
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: [ "dist" ]
        },

        useminPrepare: {
            html: [ 'app/index.html' ],
            options: {
                root: 'app',
                dest: 'dist'
            }
        },

        usemin: {
            html: [ 'app/index.html' ],
            options: {
                assetsDirs: 'app/'
            }
        }

    });

    // 3rdparty tasks are automatically loaded
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // our tasks
    grunt.registerTask('build', [
        'clean',
        'useminPrepare',
        'usemin'
    ]);

};

