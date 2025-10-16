import React from 'react';

// Component này nhận một prop là 'users' (một mảng các đối tượng user)
// và hiển thị chúng dưới dạng một danh sách.
const UserList = ({ users }) => {
    return (
        <div className="user-list">
            <h3>Danh sách User</h3>
            {users.length > 0 ? (
                <ul>
                    {/* Dùng hàm map để lặp qua mảng users và render mỗi user ra một thẻ li */}
                    {users.map((user) => (
                        <li key={user.id || user._id}>
                            {user.name} ({user.email})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Không có user nào để hiển thị.</p>
            )}
        </div>
    );
};

export default UserList;