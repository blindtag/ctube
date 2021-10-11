import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly productRepository:Repository<Product>
  ){}

  async create(createProductDto: CreateProductDto):Promise<any> {
    const createProduct = this.productRepository.create(createProductDto)
    const newProduct = await this.productRepository.save(createProduct)
    return newProduct;
  }

  async findAll():Promise<any> {
    const products = await this.productRepository.find()
    return products;
  }

  async findOne(id: number):Promise<any> {
    const product = await this.productRepository.findOne(id)
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto):Promise<any> {
    const productUpdate = await this.productRepository.update(id, updateProductDto)
    return productUpdate;
  }

  async remove(id: number):Promise<any> {
    const deleteProduct = await this.productRepository.delete(id)
    return deleteProduct;
  }
}
