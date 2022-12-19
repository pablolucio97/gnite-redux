import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux'
//@ts-ignore
import { IProduct } from '../../store/modules/cart/types.ts';
//@ts-ignore
import { api } from '../../services/api.ts'
//@ts-ignore
import { addProductToCard } from '../../store/modules/cart/actions.ts'

export function Catalog() {

    const [products, setProducts] = useState<IProduct[]>([])

    async function getProducts() {
        const response = await api.get('/products')
        setProducts(response.data)
    }

    const dispatch = useDispatch()

    useEffect(() => {
        getProducts()
    }, [])

    const handleAddProductToCard = useCallback((product: IProduct) => {
        dispatch(addProductToCard(product))
    }, [dispatch])

    return (
        <main>
            <h1>Catalog</h1>
            {
                products.map(p => (
                    <div key={p.id}>
                        <p>{p.title}</p>
                        <strong>{p.price}</strong>
                    </div>
                ))
            }
            <button type='button' onClick={() => handleAddProductToCard(products[0])}>
                Comprar
            </button>
        </main>
    )
}