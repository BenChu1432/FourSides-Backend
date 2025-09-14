import { IsNotEmpty, IsString } from 'class-validator';

export type OpenAIModel =
  | 'gpt-3.5-turbo'
  | 'gpt-3.5-turbo-16k'
  | 'gpt-4'
  | 'gpt-4-0613'
  | 'gpt-4-32k'
  | 'gpt-4-turbo'
  | 'gpt-4o'
  | 'gpt-4o-mini';

export class OpenAIRequestDto {
  model: OpenAIModel;

  messages: {
    role: 'system' | 'user' | 'assistant';
    content: string;
  }[];

  temperature?: number;
  max_tokens?: number;
  top_p?: number;
  frequency_penalty?: number;
  presence_penalty?: number;
}

export class CrossAnalysisRequest {
  @IsNotEmpty()
  @IsString()
  firstNewsId: string;

  @IsNotEmpty()
  @IsString()
  secondNewsId: string;
}
