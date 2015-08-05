'use strict';

var insertIntoPackage = require('put-packages-in-requirejs-config');

module.exports = function dustjs(grunt) {
    grunt.registerMultiTask('put-packages-in-requirejs-config', function () {
        var done = this.async();

        var options = this.options({
            src: 'public/js/rjsconfig.js',
            dest: '.build/js/rjsconfig.js',
            packages: '.build/components'
        });

        insertIntoPackage(options.packages, options.src, options.dest).then(function () {
            done();
        }).catch(done);
    });
};
