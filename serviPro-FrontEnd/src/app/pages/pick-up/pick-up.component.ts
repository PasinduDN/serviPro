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
  public filterdItemArray : string [] = [];
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

  selectedCategory(category:any){
    console.log(category);
    this.filterdItemArray= [];
    
    for(let num=0; num<this.itemList.length; num++){
      this.item = this.itemList[num];
       console.log(this.item);
      if(category.categoryId  === this.item.category){
        this.filterdItemArray.push(this.item.itemName);
        //  console.log(this.item);
      }
    }

  }
}
