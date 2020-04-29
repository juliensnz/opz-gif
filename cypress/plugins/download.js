const fs = require('fs');
const path = require('path');

const downloadsDirectory = path.join(__dirname, '..', 'downloads');

const cleanDownloadsDirectory = () => {
  fs.rmdirSync(downloadsDirectory, { recursive: true });
  return null;
};

const setUpDownloadsDirectory = (browser, options) => {
  cleanDownloadsDirectory();

  if (browser.family === 'chromium' && browser.name !== 'electron') {
    options.preferences.default.profile = { default_content_settings: { popups: 0 } };
    options.preferences.default.download = { default_directory: downloadsDirectory };

    return options;
  }

  // not-tested on FF
  if (browser.family === 'firefox') {
    options.preferences['browser.download.dir'] = downloadsDirectory;
    options.preferences['browser.download.folderList'] = 2;
    options.preferences['browser.helperApps.neverAsk.saveToDisk'] = 'text/csv';

    return options;
  }
};

module.exports = {
  setUpDownloadsDirectory,
  cleanDownloadsDirectory
};
