const express = require(`express`);
// 서버에 세부 주소를 지정하는것을 라우팅이라 한다
// 미국 35번 고속도로를 영어로 route 35라고 한다.
// 그런식으로 서버에 길을 연다는 방식으로도 이해할 수 있다.
// 서버에 세부주소(길)을 뚫으면 파일이 길어지는데
// 익스프레스에서 이러한 라우트(길)를 분리할 방법을 제공한다.
// 그게 express.Router() 입니다.
const router = express.Router();

// 주의할 점은 라우팅 관련 코딩은 routes 폴더안에 들어가야 한다
// 안그러면 인식이 안될 수 있다.

router.get('/', (req,res) => {
    res.render('index')
});
router.get('/about', (req,res) => {
    res.render('about')
});

module.exports = router;