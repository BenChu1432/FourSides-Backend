import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({ region: 'ap-southeast-1' });

async function uploadCrossAnalysisReportToS3({
  articleOneId,
  articleTwoId,
  body,
}: {
  articleOneId: string;
  articleTwoId: string;
  body: string;
}): Promise<string> {
  const key = `cross-analysis/${articleOneId}/${articleTwoId}/${Date.now() / 1000}.html`;
  const bucketName = 'cross-analysis-reports';

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: body,
    ContentType: 'text/html',
    ACL: 'public-read', // 👈 This makes it public
  });

  await s3.send(command);

  return `https://${bucketName}.s3.ap-southeast-1.amazonaws.com/${key}`;
}

export default { uploadCrossAnalysisReportToS3 };
