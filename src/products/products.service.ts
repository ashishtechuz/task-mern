import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Images, Products } from './entities/product.entity';
import { Model } from 'mongoose';
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name)
    private readonly products: Model<Products>,
    @InjectModel(Images.name)
    private readonly image: Model<Images>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const product = await this.products.create(createProductDto);
    const image = {
      image: createProductDto['image'],
      post_id: product.id,
    };
    await this.image.create(image);
    return product;
  }

  async findAll() {
    return await this.findAll();
  }

  async findOne(id: number) {
    return await this.findOne(id);
  }

  async remove(id: number) {
    return await this.products.findByIdAndRemove(id);
  }
}
