const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor')
const {setUpDownloadsDirectory,cleanDownloadsDirectory} = require('./download')


module.exports = on => {
  on('file:preprocessor', cypressTypeScriptPreprocessor)
  on('before:browser:launch', setUpDownloadsDirectory);
  on('task', {
    cleanDownloadsDirectory,
  });
}
