// src/products/controller.ts
import { JsonController, Get, Param } from 'routing-controllers'
import Product from './entity'

@JsonController()
export default class ProductController {

    @Get('/products/:id')
    getPage(
    @Param('id') id: number
    ) {
    return Product.findOne(id)
    }

    @Get('/products')
    async allProducts() {
    const products = await Product.find()
    return { products }
    }

}