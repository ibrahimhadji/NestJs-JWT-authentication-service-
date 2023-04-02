import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticaionController } from './authenticaion.controller';

describe('AuthenticaionController', () => {
  let controller: AuthenticaionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticaionController],
    }).compile();

    controller = module.get<AuthenticaionController>(AuthenticaionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
