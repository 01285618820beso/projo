import { ShoppingCartService } from './../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { promise } from 'protractor';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product :any={};
  newproduct: any[] = [];

  id;
  ShoppingCart :any ;
  constructor(private activeroute : ActivatedRoute ,public service :AuthService,
    private ProductServicex :ProductService,private router:Router,private card :ShoppingCartService) {
    this.id = this.activeroute.snapshot.paramMap.get('id');
    if(this.id){
      this.ProductServicex.getbyID(this.id).pipe(take(1)).subscribe(prod=>{
        if(prod){
           this.product=prod ;
          this.newproduct=this.product
          
        }
      })

    
   }


  }
  async ngOnInit() {
    (await this.card.getcart()).valueChanges().subscribe(x=>{
      this.ShoppingCart=x;
    
    })  }
  addtocart(){
    console.log(this.product)
    this.card.addtocart(this.newproduct);
   }
   getquatity(){
    if(!this.ShoppingCart){return 0 ;}
    let item =this.ShoppingCart.items[this.product.key];
    return item ? item.quatity : 0;
  }
  removefromcart(){
    
    this.card.removefromcart(this.product);
  
  
  }
}