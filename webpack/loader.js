module.exports = function(source) {
  if (-1 !== source.indexOf('moatad.js')) {
    return `module.exports = {loadMoatTag: () => {}}`;
  }

  return source;
}
