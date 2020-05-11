import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from './../../services/categories.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newproduct: any[] = [];
  Filterproduct: any[] = [];
  categroy = '';
  ShoppingCart :any ;
  cats;
  id;
  isfavx : boolean = true;
  constructor(private route: ActivatedRoute, private prodService: ProductService,
     private catser: CategoriesService, private card: ShoppingCartService,public service :AuthService) {
    this.prodService.get().subscribe(prodx => {
      this.newproduct = prodx;
      this.route.queryParamMap.subscribe(params => {
        this.categroy = params.get('category')
        this.Filterproduct = (this.categroy) ?
          this.newproduct.filter(p => p.payload.val().cats === this.categroy) : this.newproduct;
      });
    });
    console.log (this.Filterproduct)
    this.cats = catser.getcats();
  }
  addtocart(i){
    console.log(this.newproduct[i])
    this.card.addtocart(this.newproduct[i]);
   }

  async ngOnInit(){
    (await this.card.getcart()).valueChanges().subscribe(x=>{
      this.ShoppingCart=x;
      console.log(this.ShoppingCart)
    
    })
   
  }
getquatity(i){
  if(!this.ShoppingCart){return 0 ;}
  let item =this.ShoppingCart.items[this.newproduct[i].key];
  return item ? item.quatity : 0;
}
removefromcart(i){
  
  this.card.removefromcart(this.newproduct[i]);


}

}
