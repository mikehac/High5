import { Module } from '@nestjs/common';
import { MongoService } from './mongo.service';
import { MongoController } from './mongo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserStock, UserStockSchema } from '../schema/user-stock.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_DB ?? 'mongodb://nas:27017/the5ersdb'
    ),
    MongooseModule.forFeature([
      { name: UserStock.name, schema: UserStockSchema },
    ]),
  ],
  controllers: [MongoController],
  providers: [MongoService],
})
export class MongoModule {}
