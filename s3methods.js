const AWS = require('aws-sdk');

const s3 = new AWS.S3({
});

async function downloadObject(bucket, key, versionId) {
  try {
      const params = {
          Bucket: bucket,
          Key: key,
          VersionId: versionId
      };
      const data = await s3.getObject(params).promise();
      return  data.Body.toString('utf-8');
  } catch (e) {
      throw new Error(`Could not restore file ${key} from S3: ${e.message}`)
  }
}

module.exports = { downloadObject };