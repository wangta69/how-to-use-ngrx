https://ngrx.io/guide/store/walkthrough
```
npm i @ngrx/store
```

app.module.ts(imports)
```
import { booksReducer } from './sample1/state/books.reducer';
import { collectionReducer } from './sample1/state/collection.reducer';
import { StoreModule } from '@ngrx/store';
```
app.module.ts (StoreModule)
```
@NgModule({
    imports: [
      BrowserModule,
      StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
      HttpClientModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
```

## Flow
크게 action, create, retrieve 로 나눌 수 있다.

### create
```
import { createReducer, on } from '@ngrx/store';

import { retrievedBookList } from './books.actions';
import { Book } from '../book-list/books.model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);
```
### action
createReducer 시 초기값 및 각각의 상응하는 액션을 넣어준다.
```
import { createAction, props } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: string }>()
);

export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ books: ReadonlyArray<Book> }>()
);
```
### retrieve

## 프로그램상의 플로우
sample1.components.ts
북리스트를 불러와서 dispatch를 함
```
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import {
  retrievedBookList,
  addBook,
  removeBook,
} from './state/books.actions';

    ..........
    constructor(
      private booksService: GoogleBooksService,
      private store: Store
    ) {}

    ..........
    ngOnInit() {
      this.booksService
        .getBooks()
        .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
    }
```
books.actioins.ts
createAction 실행 (booksReducer 에 값전달)
```
export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ books: ReadonlyArray<Book> }>()
);
```

## 주요함수
### selector
https://ngrx.io/guide/store/selectors
selector 가 호출될때 마지막 인자값을 유지한다.
#### createFeatureSelector
단일 state의 데이타를 select
```
export const selectFeature = (state: AppState) => state.feature;
```
```
createFeatureSelector<AuthState>('auth');
```
####createSelector
복잡한 state를 선택하기위해 최대 8개의 단일 state를 조합하여 값을 선택할 수 있다.
```
export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.counter
);
```
```
createSelector(selectAuthState,(state: AuthState) => state.status);
```
아래처럼 selectBooks 과 selectCollectionState 를 createFeatureSelector 함수를 이용해 정의하고
createSelector 를 이용해 이 두개를 비교하여 collecton을 가져온다.
```
export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    // return []:Book
    return collection.map((id) => books.find((book) => book.id === id));
  }
);
```


