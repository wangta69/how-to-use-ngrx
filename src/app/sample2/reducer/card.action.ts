import { createAction, props } from '@ngrx/store';
import { ICard } from '../interface/ICard';

// export const addBook = createAction(
//   '[Book List] Add Book',
//   props<{ bookId: string }>()
// );
//
// export const removeBook = createAction(
//   '[Book Collection] Remove Book',
//   props<{ bookId: string }>()
// );

// export const increment = createAction('[Counter] Increment'); // 추가적인 메타데이터 없는 action creator

// 추가적인 메타데이터 있는 action creator;
export const setCards = createAction(
    '[Card List] Retrieve Card Success',
    // props<{ cards: ReadonlyArray<ICard> }>()
    props<{ cards: Array<ICard> }>()
);

export const flip = createAction(
    '[Book Collection] Flip Card',
    props<{ flipCard: ICard }>()
);

// function 이 있는 action creator
// export const loginSuccess = createAction(
//     '[Auth/API] Login Success',
//     (response: Response) => response.user;
// )
