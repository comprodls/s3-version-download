const { downloadFiles } = require('./component/downloadFiles');

const argv = require("minimist")(process.argv.slice(2));

const bucket = argv.b;
const inputFile = argv.inputfile || 'input.json';
const outputFolder = argv.outputfolder || 'result';

(async () => {
  await downloadFiles(bucket, inputFile, outputFolder);
})();