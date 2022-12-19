import React, { useState, useEffect } from 'react';
//@ts-ignore
import { IProduct } from '../../store/modules/cart/types.ts';
//@ts-ignore
import { api } from '../../services/api.ts'
//@ts-ignore
import CatalogItem from '../CatalogItem/index.tsx';

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
                   <CatalogItem key={p.id} product={p} />
                ))
            }
        </main>
    )
}