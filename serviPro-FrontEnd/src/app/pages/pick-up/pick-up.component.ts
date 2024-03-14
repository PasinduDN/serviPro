import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrl: './pick-up.component.css'
})
export class PickUpComponent implements OnInit{

  public http;
  public categoryList:any;
  public itemList:any
  public item:any;
  public filterdItemArray : Object [] = [];
  public loadItemArray : any [] = [];

  //col-3
  public selectedItem:any [] = [];

  public selectCatgory:any;
  public itemForTempSave:any;

  constructor (private httpCLient: HttpClient){
    this.http=httpCLient;
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadItems();
  }

  loadCategories(){
    this.http
      .get('http://localhost:8080/category/getCategory')
      .subscribe(data =>{
        console.log(data)
        this.categoryList=data;
      })
  }

  loadItems(){
    this.http 
      .get('http://localhost:8080/item/getItem')
      .subscribe(data => {
        this.itemList=data;
      })
  }

  // public selectItem = {
  //   itemid: null,
  //   itemCode: null,
  //   itemName: null,
  //   category: null,
  //   categoryId:null,
  //   itemPrice: null
  // }

  selectedCategory(category:any){
    console.log(category);
    this.selectCatgory=category;
    this.filterdItemArray= [];
    this.loadItemArray= [];

    this.http 
      .post('http://localhost:8080/item/getItemList',this.selectCatgory)
      .subscribe((data: any) => {
        console.log(data);
        for (let item of data) {
          this.filterdItemArray.push(item.itemName); 
          console.log("item Id " + item.id);
          let newItem = {
            itemid: item.id,
            itemCode: item.itemCode,
            itemName: item.itemName,
            category: item.category,
            categoryId: item.categoryId,
            itemPrice: item.itemPrice
          };
          this.loadItemArray.push(newItem); 
          
        }
        console.log("print filterdItemArray " + this.filterdItemArray);
      })
  }

  clickItem(itemName: any){
    console.log(itemName);

      for(let i=0; i<this.loadItemArray.length; i++){
        if(this.loadItemArray[i].itemName == itemName){
          let newItem = {
            itemid: this.loadItemArray[i].itemid,
            itemqty: 1,
            itemName: this.loadItemArray[i].itemName,
            itmDiscount: 0,
            itemPrice: this.loadItemArray[i].itemPrice
          };

          this.selectedItem.push(newItem); 

          console.log(itemName);
        }
      }
  }

  orderCancel(){
    this.selectedItem=[];
  }

  cleckItemforTempSave(item:any){
    console.log("cleckItemforTempSave" +item.itemPrice );
    this.itemForTempSave = item;
  }

  clickToUpdateItem(){
    for(let i=0; i<this.selectedItem.length; i++){
      
      if(this.itemForTempSave.itemid == this.selectedItem[i].itemid){
        this.selectedItem[i].itemqty = this.itemForTempSave.itemqty;
        this.selectedItem[i].itmDiscount = this.itemForTempSave.itmDiscount;
        this.selectedItem[i].itemPrice = this.itemForTempSave.itemPrice;
        let newItem = {
          itemid: this.loadItemArray[i].itemid,
          itemqty: 1,
          itemName: this.loadItemArray[i].itemName,
          itmDiscount: 0,
          itemPrice: this.loadItemArray[i].itemPrice
        };
      }
    }
  }

  deleteItem(){

  }

}
