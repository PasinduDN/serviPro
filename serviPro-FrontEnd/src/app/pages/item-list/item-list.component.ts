import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  
  private http;

  constructor (private httpClient:HttpClientModule){
    this.http=httpClient;
  }

  public item = {
    itemCode:null,
    itemName:null,
    category:null,
    itemPrice:null
  }
}
