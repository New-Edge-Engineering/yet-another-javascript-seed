module.exports = function (grunt) {

    /*
     * Configuration for end to end testing.
     */
    grunt.config.set('protractor', {
        options : {
            configFile : "grunt/test/protractor-conf.js", // Default config file
            noColor : false, // If true, protractor will not use colors in its output.
            debug: true, // needed to work with protractor-runner 4.0.0
            args : {

            }
        },
        e2e : {
            options : {
                keepAlive :false // grunt process will stop when the test fails.
            }
        },
        continuous : {
            options : {
                keepAlive :true
            }
        }
    });

    grunt.loadNpmTasks('grunt-protractor-runner');
};
