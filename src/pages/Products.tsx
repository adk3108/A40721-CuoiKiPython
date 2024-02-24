import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useShoppingContext } from '../contexts/ShoppingContext'
import DATA from '../data/products'
import { useNavigate } from 'react-router-dom'
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteProduct from '../components/DeleteProduct'
import UpdateProduct from '../components/UpdateProduct'
import { useUserContext } from '../contexts/UserContext'


type ProductItem = {
    id: number
    name: string
    price: number
    description: string
    image_link:string
    manufacturer: string
}

const Products = () => {

    const { user, logout } = useUserContext()

    const isLoggedIn = user.auth

    const [products, setProducts] = useState<ProductItem[]>([])
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        console.log("get products data from api")
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/products')
                console.log("products=> ", res)
                setProducts(res.data)
            } catch (error) {
                console.log("error=> ", error)
            }
        }
        fetchProducts()
    }, [])
    const handleClick = (id:number) => {
        
        // Điều hướng qua router product/:id
        navigate(`/product/${id}`);
    };
    const filteredProducts = products.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

    return (
        <div className="row">
            <div className="row mt-4">
                            <div className="col-12 text-center">
                                <h1>Product</h1>
                                <hr />
                            </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 mb-4 d-flex justify-content-end">
                <TextField
                    
                    variant="outlined"
                    placeholder="Search..."
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        </InputAdornment>
                    ),
                    sx: {
                        borderRadius: '20px', // Góc tròn hơn
                        backgroundColor: '#f0f0f0', // Màu nền\
                        width:'500px',
                        padding: '0 10px',
                    },
                    }}
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                </div>
            </div>
            <div className="row">
                {filteredProducts.map(item => {
                    return (
                        <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="card myElement"  >
                                <img src={item.image_link} className="card-img-top myElement2" alt={item.name} />
                                <div className="card-body" onClick={()=>handleClick(item.id)}>
                                    <p className="card-title">{item.name}</p>
                                    <p className="card-text">${item.price}</p>
                                </div>
                                {isLoggedIn &&
                                    <>
                                        <UpdateProduct></UpdateProduct>
                                        <DeleteProduct id={item.id}></DeleteProduct>
                                    </>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products