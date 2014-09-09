/*
 * grunt-font-awesome-svg
 * https://github.com/tsyganov/grunt-font-awesome-svg
 *
 * Copyright (c) 2014 Dmitrii Tsyganov
 * Licensed under the MIT license.
 */

'use strict';

var FontAwesomeSvgProcessor = require("../font-awesome-svg.js");

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('font_awesome_svg', 'Get font-awesome and parse it into separate SVG files', function () {

        var done = this.async();

        var processor = new FontAwesomeSvgProcessor();
        processor.setOutputPath(this.data.destination);

        processor.process().then(function(stats) {
            grunt.log.writeln(stats.numberOfFiles + " files have been created");
            done();
        });
    });

};
