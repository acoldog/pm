/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */

exports.Master = function (options) {
  require(__dirname + '/lib/master.js').create(options);
};