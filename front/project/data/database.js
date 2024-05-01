// dotenv는 패키지 맨 위 라인에 있어야합니다.
require(`dotenv`).config();
const mysql = require(`mysql2/promise`);

// 로그인 정보를 담는 라인입니다.
const pool = mysql.createPool({
    host: process.env.DB_HOST, // localhost
    database: process.env.DB_DATABASE, // blog
    user: process.env.DB_USER, // root
    password: process.env.DB_PASSWORD // 1234
});

// 작성한 로그인 정보를 외부로 보냅니다.
module.exports = pool;