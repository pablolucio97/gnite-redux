//@ts-ignore
import { ActionTypes, IProduct } from './types.ts'

export function addProductToCartRequest(product: IProduct) {
    return {
        type: ActionTypes.addProductToCartRequest,
        payload: {
            product
        }
    }
}



export function addProductToCartSuccess(product: IProduct) {
    return {
        type: ActionTypes.addProductToCartSuccess,
        payload: {
            product
        }
    }
}

export function addProductToCartFailure(productId: string) {
    return {
        type: ActionTypes.addProductToCartFailure,
        payload: {
            productId
        }
    }
}