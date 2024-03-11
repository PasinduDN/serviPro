import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.component.html',
  styleUrl: './waiters.component.css'
})
export class WaitersComponent implements OnInit{

  public http;
  public waiterList:any;
  public selectedWaiter:any;
  public isSubmitionDisabled = false;

  constructor(private httpClient: HttpClient){
    this.http=httpClient;
  }

  ngOnInit(): void {
    this.loadWaiters();
  }

  public waiter = {
    waiterId:null,
    firstName:null,
    lastName:null,
    gender:null,
    empId:null,
    age:null,
    contactNumb:null
  }

  createWaiter(){
    this.isSubmitionDisabled = true;
    this.http
      .post('http://localhost:8080/waiter/addWaiter',this.waiter)
      .subscribe(data => {
        console.log(data);
        this.loadWaiters();;
      })
  }

  loadWaiters(){
    this.http
    .get('http://localhost:8080/waiter/getWaiter')
    .subscribe((data) => {
      this.waiterList = data;
    })
  }

  btncanceloption(){
    this.waiter = {
      waiterId:null,
      firstName:null,
      lastName:null,
      gender:null,
      empId:null,
      age:null,
      contactNumb:null
    }
  }


  setSelectedWaiter(waiter:any){
    this.selectedWaiter = waiter;
    console.log(waiter);
  }

  deleteItem(){
    this.http
      .delete("http://localhost:8080/waiter/" + this.selectedWaiter.waiterId)
      .subscribe(data =>{
        console.log(data);
        this.loadWaiters();
        this.selectedWaiter={};
      })
  }

  updateItem(){
    this.isSubmitionDisabled=true;
    this.http 
      .patch('http://localhost:8080/waiter/updateWaiter',this.selectedWaiter)
      .subscribe(data =>{
        console.log(data);
        this.deleteItem();
        this.loadWaiters();
        this.selectedWaiter={};
        this.isSubmitionDisabled=false;
      })
  }
}
