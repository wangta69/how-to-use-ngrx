import { Book } from './books.model';

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}