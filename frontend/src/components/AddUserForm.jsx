import React, { useState } from 'react';

// Component này nhận một prop là 'onAddUser' (một hàm sẽ được gọi khi form được submit)
const AddUserForm = ({ onAddUser }) => {
    // Sử dụng useState để quản lý trạng thái của các ô input
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        // Ngăn chặn hành vi mặc định của form là tải lại trang
        e.preventDefault();

        // Kiểm tra xem người dùng đã nhập đủ thông tin chưa
        if (!name || !email) {
            alert('Vui lòng nhập đầy đủ tên và email');
            return;
        }

        // Gọi hàm onAddUser đã được truyền từ component cha (App.js)
        onAddUser({ name, email });

        // Xóa trắng các ô input sau khi đã thêm thành công
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-user-form">
            <h3>Thêm User mới</h3>
            <input
                type="text"
                placeholder="Tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Thêm User</button>
        </form>
    );
};

export default AddUserForm;