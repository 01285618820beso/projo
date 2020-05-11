import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  ShoppingCart :any ;
  items :any []=[]

  constructor(private card: ShoppingCartService) { }
  async ngOnInit(){
    (await this.card.getcart()).valueChanges().subscribe(x=>{
      this.ShoppingCart=x;
    
    })
    this.items=this.ShoppingCart.items
    console.log(this.items)
   
  }
  

}
