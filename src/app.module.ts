import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    ProductsModule,
    MulterModule.register({
      dest: './upload',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
