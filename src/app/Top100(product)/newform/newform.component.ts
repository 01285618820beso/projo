import { take, first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {
product : any = {};
id;
  cats;
  constructor(private cat :CategoriesService ,private activeroute : ActivatedRoute ,private ProductServicex :ProductService,private router:Router) { 
    this.cats=cat.getcats();
    this.id = this.activeroute.snapshot.paramMap.get('id');
    
    if(this.id){
      this.ProductServicex.getbyIDx(this.id).pipe(take(1)).subscribe(prod=>{
        if(prod){
           this.product=prod ;
        }
      })

    }

  }

  ngOnInit(): void {
  } 
  save(product){
    if(this.id){
      this.ProductServicex.update(this.id,product);
    }else{
    this.ProductServicex.create(product);}
    this.router.navigateByUrl("/product");
  }
  delete(){
    if(confirm('you will delete it ya m3lm')){
      if(confirm('ya basha at2ak tayp')){
        if(confirm('tab fakr tany tayp 3eb kda a7na 3eshra 3omr')){
          if(confirm('anto kda elprogramers malkosh aman ta5odny l7m w trmeny 3dm')){
            if(confirm('tb w elly fa batny da hawdeh feen')){
      this.ProductServicex.Delete(this.id);}}}}
    }
        this.router.navigateByUrl("/product");

  }

}
