import { IShoppingCartitems } from './../model/IShoppingcartitems';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { AuthService } from './../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CategoriesService } from '../services/categories.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  counterx=0;
  newproduct: any[] = [];
  Filterproduct: any[] = [];
  categroy = '';
  cats;

  constructor( private catserx: CategoriesService,private route: ActivatedRoute,public service :AuthService,
     private cartser : ShoppingCartService,private prodService: ProductService, ) {
    this.prodService.get().subscribe(prodx => {
      this.newproduct = prodx;
      this.route.queryParamMap.subscribe(params => {
        this.categroy = params.get('category')
        this.Filterproduct = (this.categroy) ?
          this.newproduct.filter(p => p.payload.val().cats === this.categroy) : this.newproduct;
      });
    });
    this.cats = catserx.getcats();

   }

  logout(){
    this.service.logout()
  }
async ngOnInit (){
  let cart = this.cartser.getcart();
  (await cart).valueChanges().subscribe(x=>{
    this.counterx=0;
    for( let item in x.items)
    {
      this.counterx += x.items[item].quatity;
    }
  })
}


}
