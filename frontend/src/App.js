import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import './App.css'; // Import file CSS

// URL của backend API mà Sinh viên 1 đã tạo
const API_URL = 'http://localhost:3000/api/users';

function App() {
    // 'users' là biến trạng thái để lưu danh sách người dùng
    // 'setUsers' là hàm để cập nhật trạng thái đó
    const [users, setUsers] = useState([]);

    // --- Hàm để lấy danh sách users từ backend ---
    const fetchUsers = async () => {
        try {
            const response = await axios.get(API_URL);
            setUsers(response.data); // Cập nhật state với dữ liệu nhận được
        } catch (error) {
            console.error("Lỗi khi tải danh sách user:", error);
        }
    };

    // useEffect sẽ chạy hàm fetchUsers() một lần duy nhất khi component được render lần đầu
    useEffect(() => {
        fetchUsers();
    }, []);

    // --- Hàm xử lý khi thêm user mới ---
    const handleAddUser = async (newUser) => {
        try {
            // Gửi request POST đến API với dữ liệu user mới
            await axios.post(API_URL, newUser);
            // Sau khi thêm thành công, gọi lại fetchUsers để cập nhật lại danh sách
            fetchUsers();
        } catch (error) {
            console.error("Lỗi khi thêm user:", error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Ứng dụng Quản lý User</h1>
                {/* Truyền hàm handleAddUser vào component AddUserForm */}
                <AddUserForm onAddUser={handleAddUser} />
                {/* Truyền danh sách users vào component UserList */}
                <UserList users={users} />
            </header>
        </div>
    );
}

export default App;