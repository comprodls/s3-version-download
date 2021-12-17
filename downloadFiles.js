const { downloadObject } = require('./s3methods');
const fs = require("fs")
const path = require("path");

async function downloadFiles (bucket, inputFile, outputFolder) {
  try {
    fs.readFile(inputFile, (err, data) => {
      const input = JSON.parse(data.toString());
    
      input.forEach((file) => {
        file.Version.forEach(async (versionId) => {
          let { dirname, filename } = giveFile(file.Key, outputFolder, versionId);
          const data = await downloadObject(bucket, file.Key, versionId);
          await writeData(dirname, filename, data);
        })
      })
    })
  } catch(e) {
    console.log(e);
  }

};

function giveFile(Filekey, outputFolder, versionId) {
  let keypath = path.parse(Filekey);
  let dirname = path.join(outputFolder,keypath.dir);
  let filename = `${keypath.name}-${versionId}${keypath.ext}`;
  filename = path.join(dirname,filename);
  return {
    dirname: dirname,
    filename: filename
  }
}

async function writeData(dirname, filename, data) {
  try {
    await fs.promises.stat(dirname);
  } catch(e) {
    await fs.promises.mkdir(dirname, { recursive: true });
  }
  fs.writeFile(filename, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

module.exports = { downloadFiles };