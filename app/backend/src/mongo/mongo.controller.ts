import { Body, Controller, Param, Post } from '@nestjs/common';
import { MongoService } from './mongo.service';
import * as interfaces from '@high5/interfaces';

@Controller('mongo')
export class MongoController {
  constructor(private readonly mongoService: MongoService) {}

  @Post('/:userId')
  async addStock(
    @Param('userId') userId: string,
    @Body() stockItem: interfaces.StockItem
  ) {
    return this.mongoService.saveUserStock(userId, stockItem);
  }
}
