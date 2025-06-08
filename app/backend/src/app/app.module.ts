import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_DB ?? 'mongodb://nas:27017/'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
