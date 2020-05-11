import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
@Input('product') product ;
  constructor() { console.log(this.product) }
  ngOnInit(): void {
  }

}
