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
  // public filterItems:any;
  public filterdItemArray: String[] = new Array(0);

  constructor (private httpCLient: HttpClient){
    this.http=httpCLient;
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadItems();
    // this.CategorizeInObjects();

  }

  loadCategories(){
    this.http
      .get('http://localhost:8080/category/getCategory')
      .subscribe(data =>{
        this.categoryList=data;
      })
  }

  loadItems(){
    this.http 
      .get('http://localhost:8080/category/getCategory')
      .subscribe(data => {
        this.itemList=data;
      })
  }

  // CategorizeInObjects(){
  //   for(let num=0; num<=this.categoryList.length; num++){
  //     this.CategoryArray.push(this.categoryList[num]);
  //   }
  // }

  selectedCategory(category:any){
    this.filterdItemArray = [];

    for(let num=0; num<this.itemList.length; num++){
      if(category.categoryName  === this.itemList[num].category){
        this.filterdItemArray.push(this.itemList[num]);
      }
    }

  }
}
