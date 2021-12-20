const { getObject } = require('../util/s3-util');
const { readFile, saveFile } = require('../util/file-util');
const { constructFilePath } = require('./file-path');
const logger = require('../util/logger');

async function downloadFiles(bucket, inputFile, outputDir) {
  try {
    const inputData = await readFile(inputFile);

    for(let keyIndex=0; keyIndex < inputData.length; keyIndex++){
      let selectedKey = inputData[keyIndex].Key;
      let versionList = inputData[keyIndex].Version;

      logger.info(`Processing file ${keyIndex+1} of ${inputData.length}`);
      for(let versionIndex=0; versionIndex < versionList.length; versionIndex++){
        let selectedVersion = versionList[versionIndex];
        try{
          logger.info(`Saving Key = ${selectedKey}, Version = ${selectedVersion}`);
          const data = await getObject(bucket, selectedKey, selectedVersion);
          const { dirName, fileName } = constructFilePath(selectedKey, outputDir, selectedVersion);
          await saveFile(dirName, fileName, data, selectedKey, selectedVersion);
        }
        catch (e) {
          logger.error(e.message);
        }
      }
    }
  }
  catch (e) {
    logger.error(e.message);
  }
};

module.exports = { downloadFiles };