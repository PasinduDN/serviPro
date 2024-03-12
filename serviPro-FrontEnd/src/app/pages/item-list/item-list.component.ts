import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})

// ABstract Method / Angular Life Cycle Method
export class ItemListComponent implements OnInit {

  public http;
  public itemList: any;
  public selectedItem:any;
  public categoryList:any;
  public selectedCategory: any;

  public isSubmissionDisabled = false;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  // ngOnInit is auto calling function. when load component function is start 
  ngOnInit(): void {
    this.loadItem();
    this.loadCategories();
  }

  public item = {
    itemid: null,
    itemCode: null,
    itemName: null,
    category: null,
    itemPrice: null
  }

  createItem() {
    this.isSubmissionDisabled = true;
    this.http
      .post('http://localhost:8080/item/addItem', this.item)
      .subscribe(data => {
        console.log(data);
        this.loadItem();
        this.isSubmissionDisabled = false;
        this.selectedItem = {};
        
        
        this.item = {
          itemid: null,
          itemCode: null,
          itemName: null,
          category: null,
          itemPrice: null
        }
      })
  }

  loadItem() {
    this.http
      .get('http://localhost:8080/item/getItem')
      // Anonimas function in Call Back Function 
      .subscribe((data) => {
        this.itemList = data
      })
  }


   deleteItem(){
    this.http.delete("http://localhost:8080/item/" + this.selectedItem.id)
      .subscribe(data => {
        console.log(data)
        this.loadItem();
        this.selectedItem = null;
      })
  }

  setSelectedItem(item:any){
    this.selectedItem = item;
    console.log(item)
  }

  btncanceloption(){
    this.item = {
      itemid: null,
      itemCode: null,
      itemName: null,
      category: null,
      itemPrice: null
    }
  }

  updateItem() {
    this.isSubmissionDisabled = true;
    this.http
      .patch('http://localhost:8080/item/updateItem', this.selectedItem)
      .subscribe(data => {
        console.log(data);
        this.loadItem();
        this.isSubmissionDisabled = false;
        this.selectedItem = {};
        
      })
  }

  loadCategories(){
    this.http
      .get('http://localhost:8080/category/getCategory')
      .subscribe(data =>{
        console.log(data)
        this.categoryList=data;
      })
  }

  setSelectedCategory(selectcategory:any){
    this.selectedCategory=selectcategory;
    console.log(selectcategory);
    this.item.category=selectcategory.categoryName;
    console.log(selectcategory.categoryName);
  }
}
