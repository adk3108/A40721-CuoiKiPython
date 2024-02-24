import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';

interface DeleteProductProps {
    id: number;
}

const DeleteProduct: React.FC<DeleteProductProps> = ({ id }) => {
    // Hàm này sẽ xử lý việc xóa sản phẩm có id cụ thể
    const handleDelete = async (id: number) => {
        // Gọi hàm hoặc API để thực hiện xóa sản phẩm với id được cung cấp
        try {
            // Gửi yêu cầu POST đến API bằng Axios
            const response = await axios.delete(`http://localhost:5000/product/${id}`);

            console.log('Success:', response.data);
            // Xử lý kết quả nếu cần
        } catch (error) {
            console.error('Error:', error);
            // Xử lý lỗi nếu có
        }
    };

    return (
        <Button onClick={() => handleDelete(id)}>Xoá sản phẩm</Button>
    );
};

export default DeleteProduct;
