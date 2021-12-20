const { getVersionData } = require('../util/s3-util');
const { readFileData, writeFileData } = require('../util/file-util');
const { getFilePath } = require('./file-path');
const logger = require('../util/logger')

async function downloadFiles(bucket, inputFile, outputFolder) {
  try {
    const inputData = await  readFileData(inputFile);

    inputData.forEach((file) => {
      file.Version.forEach(async (versionId) => {
        try {
          const data = await getVersionData(bucket, file.Key, versionId);
          const { dirName, fileName } = getFilePath(file.Key, outputFolder, versionId);
          await writeFileData(dirName, fileName, data);
        } catch (e) {
          logger.error(e);
        }
      })
    })
  } catch (e) {
    logger.error(e);
  } 
};

module.exports = { downloadFiles };