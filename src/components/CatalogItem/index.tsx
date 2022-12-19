import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
//@ts-ignore
import { IProduct } from '../../store/modules/cart/types.ts'
//@ts-ignore
import { addProductToCard } from '../../store/modules/cart/actions.ts'

interface CatalogItemProps {
  product: IProduct;
}

export default function CatalogItem({ product }: CatalogItemProps) {

  const dispatch = useDispatch()

  const handleAddProductToCard = useCallback(() => {
    dispatch(addProductToCard(product))
  }, [dispatch, product])

  return (
    <div key={product.id} >
      <p>{product.title}</p>
      <strong>{product.price}</strong>
      <button type='button' onClick={() => handleAddProductToCard(product)}>
        Comprar
      </button>
    </div >
  )
}
