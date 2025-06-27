const wrench = require('wrench');
const path = require('path');
const fs = require('fs');
const flatten = require('lodash/flatten');

module.exports = function linesCount(dirs = [process.cwd()]) {
  const files = flatten(
    dirs.map((dir) => {
      const files = wrench
        .readdirSyncRecursive(dir)
        .map((file) => path.resolve(dir, file));
      return files;
    })
  ).filter((file) => fs.statSync(file).isFile());

  return files
    .map((file) => {
      try {
        return fs.readFileSync(file, 'utf8');
      } catch (err) {
        return '';
      }
    })
    .map((code) => code.split('\n').length)
    .reduce((acc, curr) => acc + curr, 0);
};
