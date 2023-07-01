import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books/books.component';
import { WishListComponent } from './books/wish-list/wish-list.component';
import { ReadingComponent } from './books/reading/reading.component';
import { HistoryComponent } from './books/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    WishListComponent,
    ReadingComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
