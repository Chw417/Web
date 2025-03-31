const mongoose = require('mongoose');

// 定义 Job Schema
const jobSchema = new mongoose.Schema({
    companyName: {  // 公司名称
        type: String,
        required: true
    },
    jobTitle: {  // 职位名称
        type: String,
        required: true
    },
    description: {  // 职位描述
        type: String,
        required: true
    },
    salary: {  // 薪资
        type: Number,
        required: true
    }
});

// 创建 Job 模型
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
