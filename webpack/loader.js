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
  return `module.exports = {loadMoatTag: () => {}}`;
}
