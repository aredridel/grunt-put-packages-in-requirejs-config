grunt-put-packages-in-requirejs-config
======================================

Collects package.json in CommonJS Package/A form and puts the relevant fields in a requirejs config

An example task:

```
module.exports = function insertem(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-put-packages-in-requirejs-config');

    // Options
    return {
        build: {
            options: {
                src: 'public/js/config.js',
                dest: 'public/js/config.js',
                packages: 'public/js/components'
            }
        }
    };
};
```
