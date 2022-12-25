import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
//@ts-ignore
import { ICartState } from './modules/cart/types.ts';
//@ts-ignore
import rootReducer from './modules/rootReducer.ts';
//@ts-ignore
import rootSaga from './modules/rootSaga.ts';

export interface IState {
    cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares)
))

sagaMiddleware.run(rootSaga)

export default store;