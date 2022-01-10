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
