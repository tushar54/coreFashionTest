import { Component } from '@angular/core';
import { DataType } from '../../../../dataType'
import { NgFor } from '@angular/common';

@Component({
  imports: [NgFor],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {

  products: DataType[]

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        image: 'product1.jpg',
        price: 10.99,
        quantity: 5
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Description of Product 2',
        image: 'product2.jpg',
        price: 19.99,
        quantity: 3
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Description of Product 3',
        image: 'product3.jpg',
        price: 5.99,
        quantity: 10
      }
    ];
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    this.products.splice(index, 1);
    // console.log(`Product with ID ${id},${index} has been deleted.`);
    console.log(id, index, this.products)
  }
}
