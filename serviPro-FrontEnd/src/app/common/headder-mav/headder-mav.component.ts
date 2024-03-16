import { Component } from '@angular/core';
import {formatDate } from '@angular/common';
import { interval } from 'rxjs';
@Component({
  selector: 'app-headder-mav',
  templateUrl: './headder-mav.component.html',
  styleUrl: './headder-mav.component.css'
})
export class HeadderMavComponent {
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
