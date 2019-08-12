import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ShopedItemsComponent } from './components/shoped-items/shoped-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopItemComponent,
    ListItemComponent,
    ShopedItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
