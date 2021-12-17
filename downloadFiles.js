const { downloadObject } = require('./s3methods');
const fs = require("fs")

async function downloadFiles (bucket, inputFile) {
  fs.readFile(inputFile, (err, data) => {
    const input = JSON.parse(data.toString());
  
    input.forEach((file) => {
      file.Version.forEach(async (versionId) => {
        const data = await downloadObject(bucket, file.Key, versionId);
        console.log(data);
      })
    })
  })
};

module.exports = { downloadFiles };