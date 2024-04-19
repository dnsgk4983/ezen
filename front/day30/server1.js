// 웹 프로토콜을 사용하려고 http모듈을 require 함수를 이용해서 불러왔습니다.
// 불러온 http 모듈은 변수 http에 저장합니다.

const http = require(`http`);
// 불러온 http 모듈로 서버를 만들겠다. 서버는 요청과 응답을 받아서
// 작업을 수행하는 함수로 구성되어있다.
const server = http.createServer((req, res) => {
    // 받아온 응답은 html 형태의 데이터라고 인식시킨다.
    // 요청과 응답으로 시작된 서버라는 함수가 모두 실행되면 ok라고 출력한다.
    res.setHeader(`content-type`, `text/html`);
    res.end(`ok`);
});

// 서버 함수가 전부 정상적으로 실행된 경우,
// 포트 3000번을 부여하고, "ok, 서버를 시작하자" 메세지 출력
server.listen(`3000`, () => console.log(`ok, 서버를 시작하자`));