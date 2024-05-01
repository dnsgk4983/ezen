const express = require('express');

// sql로그인 정보가 들은 파일을 불러옵니다
const db = require('../data/database');

const router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/posts');
})

router.get('/posts', function(req, res) {
    res.render('posts-list');
  });
// 읽어온 sql정보를 가지고 쿼리를 돌려서 db안 데이터를 보입니다
router.get('/new-post', async function(req, res) {
    // db 변수에 저장된 sql 로그인 정보를 가지고
    // sql db에 들어가서 쿼리문을 날린 뒤에 받은 데이터를 authors 라는 이름으로
    // 프론트엔드 페이지에 넘깁니다.
    const [authors] = await db.query('select * from authors');
    res.render('create-post', {authors: authors});
})

module.exports = router;