import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';

// sample 1 관련
import { Sample1Component } from './sample1/sample1.component';
import { BookListComponent } from './sample1/book-list/book-list.component';
import { BookCollectionComponent } from './sample1/book-collection/book-collection.component';
import { booksReducer } from './sample1/state/books.reducer';
import { collectionReducer } from './sample1/state/collection.reducer';

// Sample 2  관련
import { MemoryComponent } from './sample2/memory.component';
import { CardComponent } from './sample2/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    Sample1Component,
    BookListComponent,
    BookCollectionComponent,

    MemoryComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [Sample1Component]
})
export class AppModule { }
