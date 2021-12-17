const { getVersionData } = require('../util/s3methods');
const { readFileData, writeFileData } = require('../util/fileMethods');
const { getFilePath } = require('./getFilePath');

async function downloadFiles(bucket, inputFile, outputFolder) {
  try {
    const inputData = await  readFileData(inputFile);

    inputData.forEach((file) => {
      file.Version.forEach(async (versionId) => {
        const data = await getVersionData(bucket, file.Key, versionId);
        const { dirName, fileName } = getFilePath(file.Key, outputFolder, versionId);
        await writeFileData(dirName, fileName, data);
      })
    })
  } catch (e) {
    console.log(e);
  } 
};

module.exports = { downloadFiles };