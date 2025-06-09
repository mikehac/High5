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
  ): Promise<UserStock> {
    const existing = await this.userStockModel.findOne({ userId });

    if (existing) {
      existing.stocks.push(stockItem);
      return existing.save();
    }

    const created = new this.userStockModel({
      userId,
      stocks: [stockItem],
    });
    return created.save();
  }
}
