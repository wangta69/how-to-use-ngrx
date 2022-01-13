import { ActionReducerMap } from '@ngrx/store';
import * as menuReducer from './menu_reducer';

export interface State {
    menu: menuReducer.State
}

export const reducers: ActionReducerMap<State> = {
    menu: menuReducer.reducer, // menuReducer의 featureSelectorkey와 동일
}