//import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux'
//@ts-ignore
import rootReducer from './modules/rootReducer.ts';

const store = createStore(rootReducer)

export default store;