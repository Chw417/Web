const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// 使用 body-parser 解析表单数据
app.use(bodyParser.urlencoded({ extended: true }));

// 处理表单提交
app.post('/save', (req, res) => {
    const { name, emial, phonenumber, subject } = req.body;

    const data = `Name: ${name}\nEmial: ${emial}\nPhonenumber: ${phonenumber}\nDescribe: ${subject}\n-------------------\n`;

    // 写入文件
    fs.appendFile('data.txt', data, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).send('Failed to save data');
        }
        res.send('Data saved successfully!');
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
