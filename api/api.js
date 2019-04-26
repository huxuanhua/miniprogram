const request = require('./fetch.js');

/**
 * test
 */
const test = () => request('bins/u9bvg?','get')

module.exports = {
  test: test
}