import { Controller, Get, Param, Query } from '@nestjs/common';
import { ExternalapiService } from './externalapi.service';

@Controller('externalapi')
export class ExternalapiController {
  constructor(private readonly externalapiService: ExternalapiService) {}

  @Get()
  searchStock(@Query('query') query: string) {
    return this.externalapiService.searchStock(query);
  }

  @Get('quote-stock/:symbol')
  quoteStockByParam(@Param('symbol') symbol: string) {
    return this.externalapiService.quoteStock(symbol);
  }
}
