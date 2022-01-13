import { createReducer, createFeatureSelector, on, createSelector } from '@ngrx/store';
import * as menuAction from './menu_action';
// import * as orderActions from '../actions/order.actions';

// 1. State 생성
// State interface 정 의
export interface State {
    // coffees: Product.Coffee[];
    coffees: [];
}

// State 초기값 정의
const initialState: State = {
  coffees: [],
};

// 2. Reduce 생성
// reducer 구현 (initialState, ...ons)
products = []; // 임시데이타
const menuReducer = createReducer(
  initialState,
  on(menuAction.loadeMenu, (state: State) => ({
      coffees: products
  })),
  on(menuAction.searchMenuComplete, (state: State, {res}) => ({
      coffees: res,
  }))
);

// const menuReducer = createReducer(
//   initialState
// );

// 이제 리듀서를 리턴하는 reducer함수와 전체 state 중 menu state만 식별하기 위한 featureSelector를 만듭니다.
export function reducer(state: State, action: any): State {
    return menuReducer(state, action);
}

// featureSelectorKey
// createFeatureSelector() 인자인 key값과 global state에 생성될 메뉴 State Key값은 서로 동일 해야 합니다.
export const selectMenu = createFeatureSelector<State>('menu');



//
// export interface State {
//   quantityById: {[key: string]: number };
// }
//
// const initialState: State = {
//   quantityById: {}
// }
//
// const orderReducer = createReducer(
//   initialState,
//   on(orderActions.addCoffee, (state:State, {productId}) => {
//     let nextState = {...state.quantityById};
//
//     nextState[productId]
//     ? nextState[productId]++
//     : nextState[productId]=1
//     return {
//       quantityById: nextState
//     }
//   }),
//   on(orderActions.deleteCoffee, (state:State, {productId}) => {
//     let nextState = {...state.quantityById};
//     nextState[productId]--;
//
//     if (nextState[productId] < 1) {
//       delete nextState[productId]
//     }
//
//     return {
//       quantityById: nextState
//     }
//   }),
//   on(orderActions.removeCoffee, (state:State, {productId}) => {
//     let nextState = {...state.quantityById};
//     delete nextState[productId];
//     return {
//       quantityById: nextState
//     }
//   })
// )
//
// export const reducer = (state, action) => {
//   return orderReducer(state, action);
// }