const path = require('path');

function getFilePath(key, outputDir, versionId) {
  const keyPath = path.parse(key);
  const dirName = path.join(outputDir, keyPath.dir);
  let fileName = `${keyPath.name}-${versionId}${keyPath.ext}`;
  fileName = path.join(dirName, fileName);
  return {
    dirName: dirName,
    fileName: fileName
  }
}

module.exports = { getFilePath };