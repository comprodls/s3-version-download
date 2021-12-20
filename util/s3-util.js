const AWS = require('aws-sdk');

const s3 = new AWS.S3({
});

async function getVersionData(bucket, key, versionId) {
  try {
      const params = {
          Bucket: bucket,
          Key: key,
          VersionId: versionId
      };
      const data = await s3.getObject(params).promise();
      return  data.Body.toString('utf-8');
  } catch (e) {
      throw new Error(`key: ${key}, version: ${versionId}, Couldn't download from S3`)
  }
}

module.exports = { getVersionData };