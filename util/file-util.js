const fs = require('fs')
const logger = require('./logger');

async function readFileData (inputFile) {
  const data = await fs.promises.readFile(inputFile);
  return JSON.parse(data.toString());
}

async function writeFileData (dirname, fileName, data) {
  try {
    await fs.promises.stat(dirname);
  } catch (e) {
    await fs.promises.mkdir(dirname, { recursive: true });
  }

  fs.writeFile(fileName, data, (err) => {
    if(err) {
      throw new Error (e);
    } else {
      logger.info('The file has been saved!');
    }  
  });
}

module.exports = { readFileData, writeFileData };





