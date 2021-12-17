const { downloadFiles } = require('./component/downloadFiles');

const argv = require("minimist")(process.argv.slice(2));

const bucket = argv.b;
const inputFile = argv.inputfile;
const outputFolder = argv.outputfolder;

(async () => {
  await downloadFiles(bucket, inputFile, outputFolder);
})();