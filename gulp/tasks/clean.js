const del = require('del')

module.exports = function clean(cb) {
  return del(['build/js/*.js', 'build/css/*.css', 'build/*.html']).then(() => {
    cb()
  })
}
