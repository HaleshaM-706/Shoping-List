import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent {
count:number=1;
shopItems:any=[];
shopeditemList:any=[];
name:any='';
isOn=false;
increVal:number=0;
total:any=0.0;

  constructor() { }

addItem(){
    this.count=this.count+1;
    console.log(this.shopItems.length);
    this.increVal=this.shopItems.length;
    this.increVal=this.increVal+1;
  this.shopItems.push({name:this.name,id:this.increVal});
console.log(this.shopItems);
  this.name='';
}

addToList(item:any){
  this.isOn=true;

}

addShopItem(items:any){
  console.log("items",items.name);
  let index= _.findIndex(this.shopItems,{'id':items.id});
   console.log(index);
   this.shopeditemList.push({item:this.shopItems[index].name,id:this.shopItems[index].id,total:0});
  console.log(this.shopeditemList);
}
addSum(value:any){
let index= _.findIndex(this.shopeditemList,{'id':value.id});
 this.shopeditemList[index].total=value.total;
 this.total=0;
for(let i=0;i<this.shopeditemList.length;i++){
        this.total+=parseInt(this.shopeditemList[i].total)||0;
}
}

removeData(id:any){
  let index= _.findIndex(this.shopeditemList,{'id':id});
  console.log("index",index);
  let value=this.shopeditemList[index].total;
  console.log("index",value);
  this.total=this.total - parseInt(value);
  console.log("index",this.total);
  this.shopeditemList.splice(index,1);
}

}
