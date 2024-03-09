import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { HeadderMavComponent } from './common/headder-mav/headder-mav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { PickUpComponent } from './pages/pick-up/pick-up.component';
import { PickUpSettleComponent } from './pages/pick-up-settle/pick-up-settle.component';
import { PosComponent } from './pages/pos/pos.component';
import { TableOrderSettleComponent } from './pages/table-order-settle/table-order-settle.component';
import { TablePlaceOrderComponent } from './pages/table-place-order/table-place-order.component';


const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"pos",
    component:PosComponent
  },
  {
    path:"pickUp",
    component:PickUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
