import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import axios from 'axios';
import { useShoppingContext } from '../contexts/ShoppingContext';
import DATA from '../data/products'
import { useNavigate } from 'react-router-dom';

type ProductItem = {
    id: number
    name: string
    price: number
    description: string
    image_link:string
    manufacturer: string
    year_of_manufacture: string
    weight: string
}

const ProductDetail = () => {
    const [product, setProduct] = useState<ProductItem>()
    const proid = useParams();
    const { addCartItem } = useShoppingContext()
    

    useEffect(() => {
        console.log("get products data from api")
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/product/${proid.id}`)
                console.log("products=> ", res)
                setProduct(res.data)
            } catch (error) {
                console.log("error=> ", error)
            }
        }
        fetchProducts()
    }, [])
    return (
        <>
        { product && 
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product?.image_link} alt={product?.name}height="400px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{product?.name}</h1>
                    <hr />
                    <h2 className="my-4">${product?.price}</h2>
                    <p className="lead">Name: {product?.name}</p>
                    <p className="lead">Description: {product?.description}</p>
                    <p className="lead">Manufacturer: {product?.manufacturer}</p>
                    <p className="lead">Weight: {product?.weight}</p>
                    <p className="lead">Year: {product?.year_of_manufacture}</p>
                    <button onClick={() => addCartItem(product)} className="btn btn-outline-primary my-5">Add To Card</button>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default ProductDetail
