import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ICard, IState } from '../interface';

// export const selectCards = (state: IState) => state.cards;
export const selectCard = createFeatureSelector<Array<IState>>('cards');
// export const selectCards = createFeatureSelector<ReadonlyArray<ICard>>('cards');
// export const selectCards = createFeatureSelector<Array<ICard>>('cards');
export const flipedCard = createFeatureSelector<ICard>('flip');
// export const selectCollectionState = createFeatureSelector<
//   ReadonlyArray<string>
// >('collection');

export const selectCardCollection = createSelector(
  selectCard,
  // selectCollectionState,
  (state: any) => {
    // return []:Book
    console.log('selectCardCollection:', state);
    return state.cards;
    // return state.map((id) => state.cards.find((card) => card.id === id));
  }
);


// export const selectBookCollection = createSelector(
//   selectCards,
//   // selectCollectionState,
//   (cards, collection) => {
//     // return []:Book
//     return collection.map((id) => cards.find((card) => card.id === id));
//   }
// );