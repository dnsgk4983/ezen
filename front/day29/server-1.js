// node.js 의 코딩예시 - 어떤방식으로 서버를 만드는가?

// require() 함수는 웹서버 처리를 위한 http 모듈을 읽는 함수입니다.
// 웹 서버 처리를 위한 http 모듈을 불러서 require 안에 삽입합니다.
const http = require(`http`);

// (req, res)는 request, response의 줄임말로 요청과 응답이란 단어입니다.
// createServer() 는 서버를 만드는 함수입니다. 
// 인수 즉, 인풋값으로 요청과 응답을 받습니다.
// 서버에 쓰이는 요청과 응답처리를 위해 (req, res) 객체를 인풋으로 받습니다.
const server = http.createServer((req, res) => {
    // 서버 응답의 값을 설정합니다.
    // 받는 텍스트 데이터를 html 문서로 해석하겠다는 뜻입니다.
    res.setHeader(`content-Type`, `text/html`);
    // 응답을 종료하고(end) 결과 메세지를 출력합니다.
    res.end(`do what yhou want & have it your own way??`);
});

// createServer()로 서버를 생성하고 뒤에 listen 함수로 포트번호를 설정합니다.

// 우리 서버의 포트는 3000번으로 지정하고 포트지정까지 문제없이 동작한다면
// 준비된 "ok, 서버시작!!!" 이라는 메세지를 띄워서
// 유저들이 서바가 잘 실행되었단 것을 알립니다.
server.listen(`3000`, () => console.log(`ok, 서버시작!!!`));