import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({ region: 'us-east-1' });

export async function uploadProfilePic(fileBuffer, filename, mimetype) {
  const command = new PutObjectCommand({
    Bucket: 'foursides-profile-pics-bucket-dev',
    Key: `profile-pics/${filename}`,
    Body: fileBuffer,
    ContentType: mimetype,
    ACL: 'public-read', // Optional: if your bucket policy already allows public read, you can skip this
  });

  await s3.send(command);
  return `https://foursides-profile-pics-bucket-dev.s3.amazonaws.com/profile-pics/${filename}`;
}
