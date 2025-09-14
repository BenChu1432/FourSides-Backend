import { Test, TestingModule } from '@nestjs/testing';
import { LLMController } from './llm.controller';

describe('LLMController', () => {
  let controller: LLMController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LLMController],
    }).compile();

    controller = module.get<LLMController>(LLMController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
