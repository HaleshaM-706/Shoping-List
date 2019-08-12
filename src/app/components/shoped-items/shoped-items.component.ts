import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';
import * as _ from 'underscore'
@Component({
  selector: 'app-shoped-items',
  templateUrl: './shoped-items.component.html',
  styleUrls: ['./shoped-items.component.css']
})
export class ShopedItemsComponent{
@Input() shopedItem:any;
@Output() add: EventEmitter<any> = new EventEmitter();
@Output() removeItem: EventEmitter<any> = new EventEmitter();
name:any="0";
total:any=0.0;

  constructor() {
console.log(this.shopedItem);

}

addTotal(name:any,id:any) {

    this.total=parseInt(name);
    this.add.emit({total:this.total,id:id});

  }
  removeItemList(id:any){
this.removeItem.emit(id);
  }


}
