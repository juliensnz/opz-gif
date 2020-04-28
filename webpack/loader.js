// import { getOptions } from 'loader-utils';
// import validateOptions from 'schema-utils';

// const schema = {
//   type: 'object',
//   properties: {
//     test: {
//       type: 'string'
//     }
//   }
// };

module.exports = function(source) {
  if (-1 !== source.indexOf('https://giphyscripts.s3.amazonaws.com/moat/moatad.js')) {
    return `module.exports = {loadMoatTag: () => {}}`;
  }

  return source;
}
