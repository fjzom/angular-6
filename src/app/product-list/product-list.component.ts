import { Component, EventEmitter, Output  } from '@angular/core'; 
import {Product} from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent     {
 
  @Output() onCalcTotalPrice = new EventEmitter<number>();

initTotalPrice: number;
totalPrice: number;

productArr: Product[] = [
        new Product(100, "Mobile", 10000, 1),
        new Product(101, "Bag", 500, 1),
        new Product(102, "Shoe", 1000, 1),
        new Product(103, "Groceries", 700, 1),
        new Product(104, "Furniture", 15000, 1),
        new Product(105, "Laptop", 35000, 1)
    ];

  calculate(){
    this.totalPrice =   this.productArr.reduce((a,b)=> a + (b['price']*b['quantity'] || 0), 0); 
    this.onCalcTotalPrice.emit(this.totalPrice);
  }  
  
  calcTotalPrice(price:number, quantity:number){
    console.log('test '+price+" "+quantity);
    this.calculate();
  }

  removeRow(id: number){
      this.productArr = this.productArr.filter(item => item.id !=id);
      this.calculate();
  }

}