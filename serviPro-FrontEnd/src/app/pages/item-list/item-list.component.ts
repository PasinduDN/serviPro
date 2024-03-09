import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';



@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  
  private http;
  public isSubmissionDisabled = false;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  public item = {
    itemCode:null,
    itemName:null,
    category:null,
    itemPrice:null
  }

  createStudent(){
    console.log("Function එක වැඩ");
    this.http
      .post('http://localhost:8080/item/addItem',this.item)
      .subscribe(data =>{
        console.log(data);
        console.log("Response එක වැඩ");
      })
  }
}
