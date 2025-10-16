// Dùng một mảng tạm để lưu trữ và mô phỏng database
// Dữ liệu này sẽ mất đi mỗi khi server khởi động lại
let users = [
    { id: 1, name: "Binh", email: "Binh@gmail.com" },
    { id: 2, name: "Minh", email: "Minh@gmail.com" }
];
let currentId = 3;

/**
 * @desc    Lấy danh sách tất cả người dùng
 * @route   GET /api/users
 * @access  Public
 */
exports.getUsers = (req, res) => {
    // Trả về danh sách users với status code 200 (OK)
    res.status(200).json(users);
};

/**
 * @desc    Tạo một người dùng mới
 * @route   POST /api/users
 * @access  Public
 */
exports.createUser = (req, res) => {
    // Lấy name và email từ request body
    const { name, email } = req.body;

    // Kiểm tra xem name và email có được cung cấp không
    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
    }

    // Tạo một user object mới
    const newUser = { id: currentId++, name, email };
    
    // Thêm user mới vào mảng
    users.push(newUser);

    // Trả về user vừa được tạo với status code 201 (Created)
    res.status(201).json(newUser);
};