import { AxiosResponse } from 'axios'
import { all, takeLatest, select, call, put } from 'redux-saga/effects'
//@ts-ignore
import { IState } from '../../index.ts'
//@ts-ignore
import { addProductToCartRequest, addProductToCartSuccess, addProductToCartFailure } from './actions.ts'
//@ts-ignore
import { api } from './../../../services/api.ts';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface IStockResponse {
    id: number;
    quantity: number;
}

function* checkProductsStock({ payload }: CheckProductStockRequest) {

    const { product } = payload

    const currentQuantity: number = yield select((state: IState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
    })

    const availableStockResponse: AxiosResponse<IStockResponse> =
        yield call(api.get, `/stock/${product.id}`)


    if (availableStockResponse.data.quantity > currentQuantity) {
        yield put(addProductToCartSuccess(product))
    } else {
        yield put(addProductToCartFailure(product.id))
    }


}

export default all([
    takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductsStock)
])


