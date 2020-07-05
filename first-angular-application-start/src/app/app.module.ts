import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmTableComponent } from './components/table/cm-table/cm-table.component';
import { CmListComponent } from './components/list/cm-list/cm-list.component';
import { ItemListingComponent } from './item-listing/item-listing.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CmTableComponent,
    CmListComponent,
    ItemListingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
