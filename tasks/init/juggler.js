exports.description = "juggler framework";
exports.notes = "This tool will help you install, configure, build, and "
  + "maintain your juggler project.";

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = "*";

exports.template = function(grunt, init, done) {

  var _ = grunt.utils._;

  // Files to copy (and process).
  var files = init.filesToCopy({});

  // Remove any git files
  _.each(files, function(flag, file) {
    if (file.indexOf(".git") === 0) {
      delete files[file];
    }
  });

  // Actually copy (and process). files.
  init.copyAndProcess(files, {}, {
    noProcess: [ "www/**", "android/**", "ios/**", "tasks/**" ]
  });

  // All done!
  done();

};