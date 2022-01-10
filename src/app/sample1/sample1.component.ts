import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './books.selectors';
import {
  retrievedBookList,
  addBook,
  removeBook,
} from './books.actions';
import { GoogleBooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './sample1.component.html',
})
export class Sample1Component {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
  // bookCollection$ = this.store.select(selectBookCollection) || [];

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }
}