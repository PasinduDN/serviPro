import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrl: './pick-up.component.css'
})
export class PickUpComponent implements OnInit {

  public http;
  public categoryList: any;
  public itemList: any
  public item: any;
  public filterdItemArray: Object[] = [];
  public loadItemArray: any[] = [];
  public total = 0;

  //col-3
  public selectedItem: any[] = [];

  

  public selectCatgory: any;
  public itemForTempSave: any;

  constructor(private httpCLient: HttpClient,) {
    this.http = httpCLient;
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadItems();
    this.calculateTotal();
  }

  loadCategories() {
    this.http
      .get('http://localhost:8080/category/getCategory')
      .subscribe(data => {
        console.log(data)
        this.categoryList = data;
      })
  }

  loadItems() {
    this.http
      .get('http://localhost:8080/item/getItem')
      .subscribe(data => {
        this.itemList = data;
      })
  }

  public cash = {
    fromUser: 0,
    forUser: 0
  }

  clickOrderConform() {
    console.log(this.cash.fromUser);
    if (this.cash.fromUser !== null) {
      this.cash.forUser = this.cash.fromUser - this.total;
    }
  }

  selectedCategory(category: any) {
    console.log(category);
    this.selectCatgory = category;
    this.filterdItemArray = [];
    this.loadItemArray = [];

    this.http
      .post('http://localhost:8080/item/getItemList', this.selectCatgory)
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

  clickItem(itemName: any) {
    console.log(itemName);

    for (let i = 0; i < this.loadItemArray.length; i++) {
      if (this.loadItemArray[i].itemName == itemName) {

        for (let j = 0; j < this.selectedItem.length; j++) {
          if (itemName == this.selectedItem[j].itemName) {
            this.selectedItem[j].itemqty = this.selectedItem[j].itemqty + 1;
            this.selectedItem[j].itemPrice = this.selectedItem[j].itemPrice + this.loadItemArray[i].itemPrice;
            this.calculateTotal();
            return;
          }
        }

        let newItem = {
          itemid: this.loadItemArray[i].itemid,
          itemqty: 1,
          itemName: this.loadItemArray[i].itemName,
          itmDiscount: 0,
          itemPrice: this.loadItemArray[i].itemPrice,
          // totalPrice: this.loadItemArray[i].itemPrice
        };
        this.selectedItem.push(newItem);
        this.calculateTotal();
        console.log("what " + itemName);
      }
    }
  }

  orderCancel() {
    this.selectedItem = [];
  }

  clickItemforTempSave(item: any) {
    console.log("cleckItemforTempSave" + item.itemPrice);
    this.itemForTempSave = item;
  }

  clickToUpdateItem() {
    let length = this.selectedItem.length;
    console.log("Update Function Start")
    for (let i = 0; i < length; i++) {
      if (this.selectedItem[i].itemid == this.itemForTempSave.itemid) {
        console.log("If Start")
        this.selectedItem[i].itemid = this.itemForTempSave.itemid;
        this.selectedItem[i].itemqty = this.itemForTempSave.itemqty;
        this.selectedItem[i].itemName = this.itemForTempSave.itemName;
        this.selectedItem[i].itmDiscount = this.itemForTempSave.itmDiscount;
        this.selectedItem[i].itemPrice = this.itemForTempSave.itemPrice;

        if (this.itemForTempSave.itmDiscount > 0) {
          console.log("itmDiscount > 0 Start");
          this.selectedItem[i].itemPrice = this.selectedItem[i].itemPrice - (this.selectedItem[i].itemPrice * (this.itemForTempSave.itmDiscount / 100));
        } else if (this.itemForTempSave.itemqty > 1) {
          this.selectedItem[i].itemPrice = (this.itemForTempSave.itemqty * this.itemForTempSave.itemPrice);
          console.log("itemqty > 1 Start")
        } else {
          this.selectedItem[i].itemPrice = this.itemForTempSave.itemPrice;
        }
      }
    }

    this.calculateTotal();
  }

  deleteItem() {

    let tempArray: any[] = [];

    let length = this.selectedItem.length;
    console.log("Length - " + this.selectedItem.length)
    console.log("tempSave" + this.itemForTempSave.itemid)

    for (let i = 0; i < length; i++) {
      if (this.selectedItem[i].itemid != this.itemForTempSave.itemid) {

        let newItem = {
          itemid: this.selectedItem[i].itemid,
          itemqty: this.selectedItem[i].itemqty,
          itemName: this.selectedItem[i].itemName,
          itmDiscount: this.selectedItem[i].itmDiscount,
          itemPrice: this.selectedItem[i].itemPrice
        };
        tempArray.push(newItem);
        console.log("Loop without id - " + this.selectedItem[i].itemid)
      }
    }

    this.selectedItem = tempArray;

  }

  calculateTotal() {
    this.total = 0;
    let length = this.selectedItem.length;
    for (let i = 0; i < length; i++) {
      this.total = this.total + this.selectedItem[i].itemPrice;
    }
  }

  // public dataSet = {
  //   itemCode: '',
  //   itemName: '',
  //   category:'',
  //   itemPrice:''
  // }

  //Pass Data to BackEnd
  public dataArrayToSave: any[] = [];

  public order = {
    dateTime: '',
    itemsList:[] as { itemCode: any, itemName: any, discount: any, itemPrice: any }[],
    subtotal: 0,
    quantity: 0.0,
    cashier: ''
  }

  orderSave() {
    this.order.dateTime = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en-US');;
    this.order.subtotal = this.total;
    this.order.cashier = "POS1";
    let length = this.selectedItem.length;
    console.log("Length" + length);

    let temQuantity =0;
    for (let i = 0; i < length; i++) {
      let newItem = {
          itemCode: this.selectedItem[i].itemid,
          itemName: this.selectedItem[i].itemName,
          discount: this.selectedItem[i].itmDiscount,
          itemPrice: this.selectedItem[i].itemPrice,
        };
        this.dataArrayToSave.push(newItem);
        
      temQuantity = temQuantity + this.selectedItem[i].itemqty;
    }

    this.order.quantity = temQuantity;
    this.order.itemsList = this.dataArrayToSave;

    console.log("1 - " + this.order.dateTime); //correct
    console.log("3 - " + this.order.subtotal); //correct
    console.log("5 - " + this.order.cashier); //correct

    console.log("itemsList - " + this.order.itemsList[1].itemName); 

    // if (this.order.dateTime != null &&
    //   this.order.itemsList != null &&
    //   this.order.subtotal != null &&
    //   this.order.quantity != null &&
    //   this.order.cashier != null) {

    //   this.http
    //     .post('http://localhost:8080/order/addOrders', this.order)
    //     .subscribe((data: any) => {
    //       console.log(data);
    //     });
    // } else {
    //   console.log("Some Data Missing")
    // }
  }

}
