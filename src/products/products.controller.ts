import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('create-or-update')
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    createProductDto['image'] = image.buffer;
    return this.productsService.create(createProductDto);
  }

  @Get('get-list')
  findAll() {
    return this.productsService.findAll();
  }

  @Get('get-by-id/:id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Delete('delete:id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
