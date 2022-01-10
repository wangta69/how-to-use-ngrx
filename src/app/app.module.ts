import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sample1Component } from './sample1/sample1.component';
import { BookListComponent } from './sample1/book-list.component';
import { BookCollectionComponent } from './sample1/book-collection.component';

import { booksReducer } from './sample1/books.reducer';
import { collectionReducer } from './sample1/collection.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    Sample1Component,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [Sample1Component]
})
export class AppModule { }
