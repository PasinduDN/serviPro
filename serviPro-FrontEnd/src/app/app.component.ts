import { Component } from '@angular/core';
import {formatDate } from '@angular/common';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'serviPro-FrontEnd';
  // today= new Date();
  jstoday : any;
  
  ngOnInit() {
    this.updateDateTime(); // Call initially
    // Update date and time every second
    interval(1000).subscribe(() => {
      this.updateDateTime();
    });
  }

  updateDateTime() {
    const today = new Date();
    this.jstoday = formatDate(today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }
}
