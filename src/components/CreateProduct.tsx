import axios from 'axios';
import React, { useState } from 'react'
import Toast from './Toast';

const CreateProduct = () => {

    const [productName, setProductName] = useState('');
    const [productImg, setproductImg] = useState('');
    const [productCategory, setCategory] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productWeight, setProductWeight] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [year_of_manufacture, setYear_of_manufacture] = useState('');
    const [price, setPrice] = useState('');

    const [toastMessage, setToastMessage] = useState<string>('');


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Ngăn chặn form gửi đi một cách tự động

        // Tạo một đối tượng chứa dữ liệu sản phẩm
        const productData = {
            name: productName,
            price: price,
            image_link: productImg,
            manufacturer: productBrand,
            weight: productWeight,
            description: productDescription,
            year_of_manufacture:year_of_manufacture,
            category: productCategory,
        };

        try {
            // Gửi yêu cầu POST đến API bằng Axios
            const response = await axios.post('http://localhost:5000/product', productData);

            console.log('Success:', response.data);
            setToastMessage(response.data);
            // Xử lý kết quả nếu cần
        } catch (error) {
            console.error('Error:', error);
            // Xử lý lỗi nếu có
        }
    }
        
    function handleCloseToast(): void {
        setToastMessage('');
    }

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <div className = "nav-link myELement2" data-bs-toggle="modal" data-bs-target="#loginModal">
                Thêm Sản Phẩm
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thêm Sản Phẩm</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="productName" className="form-label">Tên Sản Phẩm</label>
                                <input type="text" className="form-control" id="productName" value={productName} onChange={e => setProductName(e.target.value)} />

                                <label htmlFor="productName" className="form-label">Ảnh Sản Phẩm</label>
                                <input type="text" className="form-control" id="productName" value={productImg} onChange={e => setproductImg(e.target.value)} />
                                
                                <label htmlFor="productBrand" className="form-label">Hãng</label>
                                <input type="text" className="form-control" id="productBrand" value={productBrand} onChange={e => setProductBrand(e.target.value)} />
                                
                                <label htmlFor="productWeight" className="form-label">Cân Nặng</label>
                                <input type="text" className="form-control" id="productWeight" value={productWeight} onChange={e => setProductWeight(e.target.value)} />
                                
                                <label htmlFor="productLength" className="form-label">Giá</label>
                                <input type="text" className="form-control" id="productLength" value={price} onChange={e => setPrice(e.target.value)} />

                                <label htmlFor="productLength" className="form-label">Category</label>
                                <input type="text" className="form-control" id="productLength" value={productCategory} onChange={e => setCategory(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="productDescription" className="form-label">Mô tả</label>
                                <input type="text" className="form-control" id="productDescription" value={productDescription} onChange={e => setProductDescription(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-outline-primary w-100 mt-5">Submit</button>
                        </form>  

                        {/* {toastMessage && <Toast message={toastMessage} onClose={handleCloseToast} />}                */}
                                    </div>
                                </div>
                </div>
                        </div>
        </>
                    )
}

export default CreateProduct
