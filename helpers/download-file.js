const { getObject } = require('../util/s3-util');
const { readFile, saveFile } = require('../util/file-util');
const { getFilePath } = require('./file-path');
const logger = require('../util/logger')

async function downloadFiles(bucket, inputFile, outputDir) {
  try {
    const inputData = await readFile(inputFile);

    inputData.forEach((file) => {
      file.Version.forEach(async (versionId) => {
        try {
          const data = await getObject(bucket, file.Key, versionId);
          const { dirName, fileName } = getFilePath(file.Key, outputDir, versionId);
          await saveFile(dirName, fileName, data, file.Key, versionId);
        } catch (e) {
          logger.error(e.message);
        }
      })
    })
  } catch (e) {
    logger.error(e.message);
  } 
};

module.exports = { downloadFiles };