import { createReducer, on } from '@ngrx/store';

import { setCards, flip } from './card.action';
import { ICard, IState, STATUS } from '../interface';


// export const initialState: ReadonlyArray<ICard> = [];
// export const initialState: Array<ICard> = [];
export const initialState: IState = {
  remains: 0,
  highestScore: 0,
  status: null,
  cards: [],
  lastSelectedCard: null,
  elapsedMs: 0,
  remaindMs: 0,
  level: 0,
  maxLevel: 0,
  score: 0
};

export const cardsReducer = createReducer(
    initialState,
    on(setCards, (state, { cards }) => ({ ...state, cards})),
    // on(flip, (state, { flipCard }) => ({...state })),
    on(flip, (state, { flipCard }) => {
        // const childArrayCopy=state.cards.slice();
        let childArrayCopy=JSON.parse(JSON.stringify(state.cards));
        let childArray = childArrayCopy.map((arrayElement: ICard)=> {
          if (arrayElement.id === flipCard.id) {
              arrayElement.flipped = true;
          }
          return arrayElement;
        });
        console.log('childArray:', childArray)

        // 이전에 선택된 카드가 있는지 확인
        let lastSelectedCard = state.lastSelectedCard;


        return {...state, cards: childArray, lastSelectedCard};
    }),


);