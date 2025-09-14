import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { LLMService } from './llm.service';
import { CrossAnalysisRequest, OpenAIRequestDto } from './llm.dto';
import { AuthGuard } from 'src/common/auth.guard';
import { TokenPayload } from 'src/app.dto';

@Controller('llm')
export class LLMController {
  constructor(private readonly llmService: LLMService) {}
}
