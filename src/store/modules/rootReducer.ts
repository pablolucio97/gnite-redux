import { combineReducers } from 'redux';
//@ts-ignore
import cart from './cart/reducer.ts';

export default combineReducers({
    cart,
})