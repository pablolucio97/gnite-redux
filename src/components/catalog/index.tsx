import React, { useState, useEffect } from 'react';
import { IProduct } from '../../store/modules/cart/types';
//@ts-ignore
import { api } from '../../services/api.ts'

export function Catalog() {

    const [products, setProducts] = useState<IProduct[]>([])

    async function getProducts() {
        const response = await api.get('/products')
        setProducts(response.data)
    }

    useEffect(() => {
        getProducts()
    }, [])

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
        </main>
    )
}