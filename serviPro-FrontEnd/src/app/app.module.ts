import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
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
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './pages/categories/categories.component';
import { WaitersComponent } from './pages/waiters/waiters.component';
import { OrdersComponent } from './pages/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeadderMavComponent,
    DashboardComponent,
    ItemListComponent,
    PickUpComponent,
    PickUpSettleComponent,
    PosComponent,
    TableOrderSettleComponent,
    TablePlaceOrderComponent,
    CategoriesComponent,
    WaitersComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
