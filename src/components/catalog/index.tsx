import React from 'react';
import { useSelector } from 'react-redux'

export function Catalog() {

    const stored = useSelector(state => state)

    console.log(stored)

    return (
        <h1>Catalog</h1>
    )
}