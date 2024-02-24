import React, { useState } from 'react';

interface ToastProps {
    message: string;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
    // State để kiểm soát hiển thị của Toast
    const [show, setShow] = useState(true);

    // Xử lý khi người dùng nhấn nút đóng Toast
    const handleClose = () => {
        setShow(false);
        onClose();
    };

    return (
        <div className={`toast ${show ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <strong className="me-auto">Thông báo</strong>
                <button type="button" className="btn-close" onClick={handleClose}></button>
            </div>
            <div className="toast-body">
                {message}
            </div>
        </div>
    );
};

export default Toast;
