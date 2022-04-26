import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Products {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

@Schema()
export class Images {
  @Prop()
  image: string;
  @Prop({ type: 'number', ref: Products.name })
  post_id: number;
  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Products);
export const ImageSchema = SchemaFactory.createForClass(Image);
