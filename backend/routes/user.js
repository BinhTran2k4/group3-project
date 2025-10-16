const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Định nghĩa route để lấy danh sách users
// Khi có request GET đến '/users', nó sẽ gọi hàm getUsers trong userController
router.get('/users', userController.getUsers);

// Định nghĩa route để tạo user mới
// Khi có request POST đến '/users', nó sẽ gọi hàm createUser trong userController
router.post('/users', userController.createUser);

module.exports = router;
