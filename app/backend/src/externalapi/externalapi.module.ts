import { Module } from '@nestjs/common';
import { ExternalapiService } from './externalapi.service';
import { ExternalapiController } from './externalapi.controller';

@Module({
  controllers: [ExternalapiController],
  providers: [ExternalapiService],
})
export class ExternalapiModule {}
