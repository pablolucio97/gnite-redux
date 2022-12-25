import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
//@ts-ignore
import { IProduct } from '../../store/modules/cart/types.ts'
//@ts-ignore
import { addProductToCartRequest } from '../../store/modules/cart/actions.ts'
//@ts-ignore
import { IState } from '../../store/index.ts';

interface CatalogItemProps {
  product: IProduct;
}

export default function CatalogItem({ product }: CatalogItemProps) {

  const dispatch = useDispatch()

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id)
  })
  
  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product])

  useEffect(() => {
    console.log(hasFailedStockCheck)
  }, [hasFailedStockCheck])

  return (
    <div key={product.id} >
      <p>{product.title}</p>
      <strong>{product.price}</strong>
      <button type='button' onClick={handleAddProductToCart}>
        Comprar
      </button>
      {hasFailedStockCheck && <span style={{ color: 'red' }}>Falta de estoque</span>}
    </div >
  )
}
