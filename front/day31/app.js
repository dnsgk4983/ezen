// express 모듈을 불러와서 get 명령어로 메인 주소에 대한 내용을
const path = require(`path`);
const fs = require(`fs`);
const express = require(`express`);
const app = express();
const port = 3000;

// css 적용시키기
app.use(express.static(`public`));

// json 데이터를 받으면 데이터를 해석해서 화면에 표시해야함
// 그래서 파일을 읽어들이는 코드를 추가하자
app.use(express.urlencoded({extended: false}));
// urlencoded 는 express에서 데이터해석을 위해 사용
// {extended: false}는 데이터의 파싱(해석)방법을 지정합니다.
// 옵션이 false란 뜻은 내장도니 쿼리스트링 라이브러리릉 사용하여 데이터를 파싱하라는 뜻

// get 명령어로 메인 주소에 대한 페이지 내용을 작성합니다.
app.get('/', ((req, res) => {
    // 메인주소에 쓰일 index.html을 views 폴더에서 읽어들인 후 htmlFilePath 변수에 저장
    const htmlFilePath = path.join(__dirname, `views`, `index.html`);
    res.sendFile(htmlFilePath);
}))

app.get('/restaurants.html', ((req, res) => {
    const htmlFilePath = path.join(__dirname, `views`, `restaurants.html`);
    res.sendFile(htmlFilePath);
}))

app.get('/recommend', ((req, res) => {
    const htmlFilePath = path.join(__dirname, `views`, `recommend.html`);
    res.sendFile(htmlFilePath);
}))

// post 명령어로 form 태그에 입력한 정보를 json 파일에 담습니다.
// 이 때, json 파일에 데이터를 담는 방법이 api 중 post 명령어 사용입니다.
// get: 데이터 읽기 post: 데이터 생성 delete: 데이터 삭제
app.post('/recommend', ((req, res) => {
    // 요청객체인 req를 통해서 폼태그에 입력한 고객데이터를 가져옵니다.
    const restaurant = req.body;
    // 고객데이터가 저장되는 json 파일의 경로입니다.
    const filePath = path.join(__dirname, `data`, `restaurants.json`);
    // fs 명령어로 지정된 json 파일을 읽어옵니다.
    const fileData = fs.readFileSync(filePath);
    // 읽어온 json 데이터는 JSON.parse 명령어로 편집할 수 있는 데이터 형태로 '해석'합니다.
    const storedRestaurants = JSON.parse(fileData);
    // 해석된 데이터를 데이터셋에 추가합니다.
    storedRestaurants.push(restaurant);
    // 데이터 추가 후 다시 json 형식으로 업데이트 된 데이터를 원복시킵니다.
    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
    // 모든 작업이 완료되면 사이트 이용자를 confirm 주소로 돌려보냅니다.
    res.redirect(`/confirm`);

}))

app.get('/confirm', ((req, res) => {
    const htmlFilePath = path.join(__dirname, `views`, `confirm.html`);
    res.sendFile(htmlFilePath);
}))

app.get('/about', ((req, res) => {
    const htmlFilePath = path.join(__dirname, `views`, `about.html`);
    res.sendFile(htmlFilePath);
}))
.listen(port, () =>  console.log(`${port}번 포트입니다.`)); // 해당 서버는 3000번 포트를 점유할 것이며, 성공하면 이에대한 메세지를 출력합니다.