const path = require('path');

function getFilePath(key, outputFolder, versionId) {
  const keyPath = path.parse(key);
  const dirName = path.join(outputFolder, keyPath.dir);
  let fileName = `${keyPath.name}-${versionId}${keyPath.ext}`;
  fileName = path.join(dirName, fileName);
  return {
    dirName: dirName,
    fileName: fileName
  }
}

module.exports = { getFilePath };