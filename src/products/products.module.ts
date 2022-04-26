import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import {
  ImageSchema,
  Products,
  ProductSchema,
  Images,
} from './entities/product.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Products.name, schema: ProductSchema },
      { name: Images.name, schema: ImageSchema },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
