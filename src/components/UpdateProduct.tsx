import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const UpdateProduct = () => {
    

    const [productName, setProductName] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productWeight, setProductWeight] = useState('');
    const [productLength, setProductLength] = useState('');
    const [productDescription, setProductDescription] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Ngăn chặn form gửi đi một cách tự động

        // Tạo một đối tượng chứa dữ liệu sản phẩm
        const productData = {
            name: productName,
            brand: productBrand,
            weight: productWeight,
            length: productLength,
            description: productDescription
        };

        try {
            // Gửi yêu cầu POST đến API bằng Axios
            const response = await axios.put('url_api_post_product', productData);

            console.log('Success:', response.data);
            // Xử lý kết quả nếu cần
        } catch (error) {
            console.error('Error:', error);
            // Xử lý lỗi nếu có
        }
    }
        
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <Button data-bs-toggle="modal" data-bs-target="#loginModal">
                Sửa Sản Phẩm
            </Button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sửa sản phẩm</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="productName" className="form-label">Tên Sản Phẩm</label>
                                <input type="text" className="form-control" id="productName" value={productName} onChange={e => setProductName(e.target.value)} aria-describedby="emailHelp"/>
                                
                                <label htmlFor="productBrand" className="form-label">Hãng</label>
                                <input type="text" className="form-control" id="productBrand" value={productBrand} onChange={e => setProductBrand(e.target.value)} aria-describedby="emailHelp"/>
                                
                                <label htmlFor="productWeight" className="form-label">Cân Nặng</label>
                                <input type="text" className="form-control" id="productWeight" value={productWeight} onChange={e => setProductWeight(e.target.value)} aria-describedby="emailHelp"/>
                                
                                <label htmlFor="productLength" className="form-label">Chiều dài</label>
                                <input type="text" className="form-control" id="productLength" value={productLength} onChange={e => setProductLength(e.target.value)} aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="productDescription" className="form-label">Mô tả</label>
                                <input type="text" className="form-control" id="productDescription" value={productDescription} onChange={e => setProductDescription(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-outline-primary w-100 mt-5">Submit</button>
                        </form>                 
                                    </div>
                                </div>
                </div>
                        </div>
        </>
                    )
}

export default UpdateProduct
