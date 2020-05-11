import { Component } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
items :string[]=[
  '123456','456978'
];
additem(x){
  this.items.splice(0,0,x.value);
}
remove(c){
 let index = this.items.indexOf(c);
 this.items.splice(index,1);

  
}
}
