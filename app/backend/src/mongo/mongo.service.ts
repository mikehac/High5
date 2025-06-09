import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserStock, UserStockDocument } from '../schema/user-stock.schema';
import { StockItem } from '@high5/interfaces';

@Injectable()
export class MongoService {
  constructor(
    @InjectModel(UserStock.name)
    private userStockModel: Model<UserStockDocument>
  ) {}

  async saveUserStock(
    userId: string,
    stockItem: StockItem
  ): Promise<UserStock | { stockExists: boolean }> {
    const existingUser = await this.userStockModel.findOne({ userId });

    if (existingUser) {
      if (
        existingUser.stocks.some((stock) => stock.symbol === stockItem.symbol)
      ) {
        return { stockExists: true };
      }

      existingUser.stocks.push(stockItem);
      return existingUser.save();
    }

    const created = new this.userStockModel({
      userId,
      stocks: [stockItem],
    });
    return created.save();
  }

  async getUserStocks(userId: string): Promise<StockItem[] | []> {
    const userStock = await this.userStockModel.findOne({ userId }).exec();
    return userStock ? userStock.stocks : [];
  }

  async deleteUserStock(
    userId: string,
    stockSymbol: string
  ): Promise<UserStock | null> {
    const userStock = await this.userStockModel.findOne({ userId }).exec();
    if (!userStock) {
      return null;
    }

    userStock.stocks = userStock.stocks.filter(
      (stock) => stock.symbol !== stockSymbol
    );

    return userStock.save();
  }
}
