const { downloadFiles } = require('./helpers/download-file');
const logger = require('./util/logger');
const { defaults } = require('./config.json');

const argv = require("minimist")(process.argv.slice(2));

const bucket = argv.bucket;
const inputFile = argv.inputfile || defaults.inputfile;
const outputDir = argv.outputdir || defaults.outputdir;

function checkArguments() {
  if (!bucket) {
    throw new Error('Bucket argument is missing. Exiting script');
  }
  if (!argv.inputfile) {
    logger.info('No inputfile argument provided, using default');
  }
  if (!argv.outputdir) {
    logger.info('No outputdir argument provided, using default');
  }
}

(async () => {
  try {
    logger.info('Starting script');
    checkArguments();
    logger.info(`Script parameters: bucket=${bucket}, inputfile=${inputFile}, outputdir=${outputDir}`);
    await downloadFiles(bucket, inputFile, outputDir);
  } catch (e) {
    logger.error(e.message);
  } 
})();