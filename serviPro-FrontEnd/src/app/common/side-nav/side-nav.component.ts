import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  public selectedMenu = "home";

  setSelectedMenu(menu:string){
    this.selectedMenu = menu
  }
}
