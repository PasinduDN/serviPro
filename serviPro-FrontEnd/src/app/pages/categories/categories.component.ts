import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  public http;
  public categoryList:any;
  public selectedCategory:any;
  public isSubmitionDisabled = false;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }


  ngOnInit(): void {
    this.loadItem();
  }

  public category = {
    categoryId:null,
    categoryName:null
  }

  createItem(){
    this.isSubmitionDisabled = true;
    this.http
      .post('http://localhost:8080/category/addCategory',this.category)
      .subscribe(data => {
        console.log(data);
        this.loadItem();
      })
  }

  loadItem(){
    this.http
      .get('http://localhost:8080/category/getCategory')
      .subscribe ((data) => {
        this.categoryList = data;
      })
  }

  btncanceloption(){
    this.category = {
      categoryId:null,
      categoryName:null
    }
  }

  setSelectedCategory(category:any){
    this.selectedCategory = category;
    console.log(category)
  }

  deleteItem(){
    this.http
      .delete("http://localhost:8080/category/" + this.selectedCategory.categoryId)
      .subscribe(data => {
        console.log(data)
        this.loadItem();
        this.selectedCategory={};
      })
  }

  updateItem(){
    this.isSubmitionDisabled=true;
    this.http
      .patch('http://localhost:8080/category/',this.selectedCategory)
      .subscribe(data => {
        console.log(data)
        this.loadItem();
        this.selectedCategory={};
        this.isSubmitionDisabled=false;
      })
  }
}
