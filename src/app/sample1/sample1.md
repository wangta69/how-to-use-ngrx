```
npm i @ngrx/store
```

app.module.ts(imports)
```
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
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
