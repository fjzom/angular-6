import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';  
  message: string;
  category:string;
  
 eligibleDiscount(totalPrice:number){
   if(totalPrice> 500){
     this.message = 'You are eligible for discount';
   }
 }
  
  
}
