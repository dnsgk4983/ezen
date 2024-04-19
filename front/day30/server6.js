// 설치한 express 모듈을 불러옵니다.
const express = require(`express`);
// express를 실행하여 express 함수를 만들고, 이를 app 변수에 저장합니다.
const app = express();

// express에서는 포트번호를 변수처리 합니다.
const port = 3000;

// express 안의 get 기능을 써서 주소가 / 즉, 메인 주소일 때 함수안의 내용을 실행합니다.
// 정보를 읽어들이는 것을 api 기준으로 get이라고 부릅니다.
// 화면에 표시할 정보를 "읽어들이는" 겁니다. 그래서 데이터를 읽는 get을 사용합니다.
// 결과 컨텐츠 타입은 html 형식으로 지정하고 다국어를 utf-8로 지원합니다.

app.get("/", (req, res) => {
    res.set({"Content-Type": "text/html; charset=utf-8"});
    res.end(`express를 써보자`);
});

app.listen(port, () => {
    console.log(`서버시작, ${port} 포트로 연결합니다.`);
});