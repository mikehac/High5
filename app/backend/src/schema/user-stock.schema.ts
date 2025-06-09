// src/stocks/schemas/user-stock.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { StockItem } from '@high5/interfaces';

export type UserStockDocument = UserStock & Document;

@Schema()
export class UserStock {
  @Prop({ required: true, unique: true })
  userId!: string;

  @Prop({
    type: [
      {
        currency: String,
        exchange: String,
        exchangeFullName: String,
        name: String,
        symbol: String,
      },
    ],
  })
  stocks!: StockItem[];
}

export const UserStockSchema = SchemaFactory.createForClass(UserStock);
