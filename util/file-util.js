const fs = require('fs')
const logger = require('./logger');

async function readFile (inputFile) {
  try {
    const data = await fs.promises.readFile(inputFile);
    return JSON.parse(data.toString());
  } catch (e) {
    throw new Error(`inputfile: ${inputFile}, Couldn't read`)
  }
}

async function saveFile (dirname, fileName, data, key, versionId) {
  try {
    await fs.promises.stat(dirname);
  } catch (e) {
    await fs.promises.mkdir(dirname, { recursive: true });
  }

  fs.writeFile(fileName, data, (err) => {
    if(err) {
      throw new Error (`key= ${key}, version= ${versionId}, Couldn't save in local system`);
    } else {
      logger.info(`key= ${key}, version= ${versionId}, Saved in local system`);
    }  
  });
}

module.exports = { readFile, saveFile };





