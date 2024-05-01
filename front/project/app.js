// node.js 패키지로 다른 폴더 경로 인식 시키는 페이지
const path = require(`path`);
// 익스프레스 url 인식
const express = require(`express`);
// 익스프레스 실행하여 app 변수에 저장
const app = express();
const port = 3000;
// 1. 라우터가 포함된 blog.js 를 읽어들입니다.
const blogRoutes = require(`./routes/blog`);

// ejs 형식 프론트엔드 페이지 쓰겠다고 선언
app.set(`view engine`, `ejs`);
// 프론트엔드 파일경로는 views에 있다고 알려준다.
app.set(`views`, path.join(__dirname, `views`));

// url 경로 해석은 확장패키지도 쓰겠다 (true 설정)
app.use(express.urlencoded({extended: true}));
// css는 public 폴더에 있다고 알려준다.
app.use(express.static(`public`));

// 2. 읽어들인 라우터 실행
app.use(blogRoutes);
// 에러객체와 미들웨어가 추가 된 함수
app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).render(`500`);
})

app.listen(port, () => console.log(`${port}번 포트입니다.`));   