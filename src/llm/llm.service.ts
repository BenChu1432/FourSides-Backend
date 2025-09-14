import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { KyselyService } from 'src/kysely/kysely.service';
import { NotificationService } from 'src/notification/notification.service';
import awsUtil from 'utils/awsUtil';

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const TOGETHER_API_KEY = process.env.TOGETHER_API_KEY;

@Injectable()
export class LLMService {
  private genAI: GoogleGenerativeAI;

  constructor(
    private readonly kyselyService: KyselyService,
    private readonly notificationService: NotificationService,
  ) {
    if (!GOOGLE_API_KEY) {
      throw new HttpException(
        'GOOGLE_API_KEY environment variable is not set',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    this.genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
  }
  private get db() {
    return this.kyselyService.connection;
  }

  async generateText(prompt: string): Promise<string> {
    const model = this.genAI.getGenerativeModel({
      model: 'models/gemini-2.5-flash-lite', // or any other model
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }
}
