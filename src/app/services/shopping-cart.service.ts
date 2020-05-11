import { take } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { IShoppingCart } from '../model/IShoppingcart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor( private db : AngularFireDatabase) {}
   private create(){
     return this.db.list('/shopping').push({
       datecreated: new Date().getDate()
     })
   }
   public async getOrCreatecartID(){
     let Cartid=localStorage.getItem('cartid');
     if(Cartid) return Cartid;
     /* async && await 3shan elfn tmshy sa7 y3ny msh haynafz el await 8er lma awel satren dol mknosh by7slo */ 
     let resualt = await this.create();
     localStorage.setItem('cartid',resualt.key);
     return resualt.key;
   }
   public async getcart() :Promise<AngularFireObject<IShoppingCart>>{
    let x= await  this.getOrCreatecartID(); 
    return this.db.object('/shopping/ '+x);
  }
 
   getitem(cartid:string , productid : string){
    return this.db.object('/shopping/ ' + cartid +'/items/'+productid);
   }
   async addtocart(product){
  this.updatecart(product,1);
    
   }
   async removefromcart(product){
    this.updatecart(product,-1);

   
   }
   async updatelove(x){
    this.updatecart(x,0);

   }
   async updatecart(product,quauntitystate){
    console.log(product);
    let cartid= await this.getOrCreatecartID();
     let items = this.getitem(cartid,product.key);
    items.snapshotChanges().pipe(take(1)).subscribe((item:any)=>{
      if(item.payload.exists()){
        items.update({quatity: item.payload.val().quatity+quauntitystate , product:{isfav :product.payload.val().isfav, name:product.payload.val().name,
          catname:product.payload.val().cats,
          imgurl:product.payload.val().imgurl,
          price:product.payload.val().price,}});
        
      }
      else{
        items.update({
          product : {
          name:product.payload.val().name,
          catname:product.payload.val().cats,
          imgurl:product.payload.val().imgurl,
          price:product.payload.val().price,
          isfav:product.payload.val().isfav,

          }
      , quatity :1

      })
    }
    })
   }

}
