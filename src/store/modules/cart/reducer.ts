import { Reducer } from "redux";
import produce from 'immer'
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
    items: []
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {

    return produce(state, draft => {
        switch (action.type) {
            case 'ADD_PRODUCT_TO_CARD': {
                const { product } = action.payload

                //CHECKS IF PRODUCT ALREADY IS IN CART AND INCREASES THE QUANTITY
                //OTHERWISE ONLY ADD TO CART NORMALLY

                const productCartIndex = draft.items
                    .findIndex(item => item.product.id === product.id)

                if (productCartIndex >= 0) {
                    draft.items[productCartIndex].quantity++
                } else {
                    draft.items.push({
                        product,
                        quantity: 1
                    })
                }
            }
                break
            default: {
                return draft
            }
        }
    })


}


export default cart;
