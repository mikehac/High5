import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
    return await this.mongoService.saveUserStock(userId, stockItem);
  }

  @Get('/:userId')
  async getUserStocks(@Param('userId') userId: string) {
    return this.mongoService.getUserStocks(userId);
  }

  @Delete(':userId/:stockSymbol')
  async deleteUserStock(
    @Param('userId') userId: string,
    @Param('stockSymbol') stockSymbol: string
  ) {
    return this.mongoService.deleteUserStock(userId, stockSymbol);
  }
}
