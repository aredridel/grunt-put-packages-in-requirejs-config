'use strict';
var grunt = require('grunt');
var test = require('tap').test;
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');
var path = require('path');
var fs = require('fs');

grunt.loadNpmTasks('grunt-force-task');

grunt.task.init = function() {};
require('./tasks')(grunt);

test('test', function(t) {
    var config = path.resolve(__dirname, 'tmp/config.js');
    grunt.initConfig({
        "put-packages-in-requirejs-config": {
            target: {
                options: {
                    src: config,
                    dest: config,
                    packages: path.resolve(__dirname, 'test-fixtures')
                }
            }
        }
    });

    mkdirp.sync(path.dirname(config));

    fs.writeFileSync(config, '"use strict"; requirejs.config({packages: []})');
        grunt.tasks(['put-packages-in-requirejs-config'], {}, function(){
        //verify the files exist
        t.matches(fs.readFileSync(config, 'utf-8'), /1.0.0-a/);

        rimraf('tmp', function() {
            t.end();
        });

    });
});
