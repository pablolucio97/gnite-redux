import {all} from 'redux-saga/effects'

//@ts-ignore
import cart from './cart/sagas.ts'

export default function* rootSaga(){
    return yield all([
        cart
    ])
}