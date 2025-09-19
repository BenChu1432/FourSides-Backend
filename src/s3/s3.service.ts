import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import * as mime from 'mime-types';

@Injectable()
export class S3Service {
  private s3: S3Client;
  private bucket: string;

  constructor(private readonly configService: ConfigService) {
    this.bucket = configService.get<string>('AWS_S3_BUCKET')!;
    this.s3 = new S3Client({
      region: configService.get<string>('AWS_REGION')!,
      credentials: {
        accessKeyId: configService.get<string>('AWS_ACCESS_KEY_ID')!,
        secretAccessKey: configService.get<string>('AWS_SECRET_ACCESS_KEY')!,
      },
    });
  }

  async uploadBuffer(file: Express.Multer.File) {
    const mimeType = file.mimetype || 'application/octet-stream';
    const fileExt = mime.extension(mimeType);
    const key = `profile-pictures/${Date.now()}-${file.originalname}`;

    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: key,
      Body: file.buffer, // 🔥 buffer from memory
      ContentType: mimeType,
    });

    await this.s3.send(command);

    return `https://${this.bucket}.s3.amazonaws.com/${key}`;
  }
}
