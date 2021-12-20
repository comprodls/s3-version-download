const { downloadFiles } = require('./helpers/download-file');
const logger = require('./util/logger');
const { defaults } = require('./config.json');

const argv = require("minimist")(process.argv.slice(2));

const bucket = argv.bucket;
const inputFile = argv.input || defaults.input;
const outputFolder = argv.outputdir || defaults.outputdir;

function checkArguments() {
  if (!bucket) {
    throw new Error('Bucket argument is missing');
  }
  else {
    if (!argv.input) {
      logger.info('No input argument, using default input = input.json');
    }
    if (!argv.outputdir) {
      logger.info('No outputdir argument, using default outputdir = result');
    }
  }
}

(async () => {
  try {
    checkArguments();
    await downloadFiles(bucket, inputFile, outputFolder);
  } catch (e) {
    logger.error(e.message);
  } 
})();