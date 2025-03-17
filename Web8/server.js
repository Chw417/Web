const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./userRoutes');
const path = require('path');
const { swaggerUi, swaggerSpec } = require('./swagger');  // 引入 swagger 配置

const app = express();

// 连接 MongoDB 数据库
mongoose.connect('mongodb://localhost/meanshell', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// 配置 Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 路由
app.use('/user', userRoutes);

// 使用 Swagger UI 展示 API 文档
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 静态文件处理
app.use('/images', express.static(path.join(__dirname, 'images')));

// 启动服务器
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
