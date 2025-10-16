const express = require('express');
const app = express();

// BƯỚC 2: Import các routes của user vào đây
const userRoutes = require('./routes/user');

// Middleware để cho phép server đọc dữ liệu JSON
app.use(express.json());

// Thêm CORS Middleware để cho phép frontend gọi API từ một domain khác
// (Rất quan trọng khi làm việc với React sau này)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-control-allow-headers', 'Content-Type');
    next();
});

// BƯỚC 3: Sử dụng các routes đã import với tiền tố '/api'
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

