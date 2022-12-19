import { createStore } from 'redux'
//@ts-ignore
import { ICartState } from './modules/cart/types.ts';
//@ts-ignore
import rootReducer from './modules/rootReducer.ts';

export interface IState{
    cart: ICartState;
}

const store = createStore(rootReducer)

export default store;