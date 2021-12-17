const { downloadFiles } = require('./downloadFiles');

const argv = require("minimist")(process.argv.slice(2));

const bucket = argv.b;
const inputFile = argv.inputFile;

(async () => {
  await downloadFiles(bucket, inputFile);
})();