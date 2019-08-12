import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent{
@Input() items:any;
@Input() count:number;
@Output() addItem: EventEmitter<any> = new EventEmitter();;
shopItem:any=[];
isOn=false;
  constructor() {

  this.isOn=true;
}
addItems(item:any){
console.log(item);
  this.addItem.emit({name:item.name,id:item.id});

}


}
