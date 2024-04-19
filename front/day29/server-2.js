// /user 와 /feed라는 하위 url 주소를 만들어서
// 웹서버가 정보를 전달하는 프로그램 만들기

const http = require(`http`);
const url = require(`url`); // url 모듈 로딩해서 웹서버 만들기
// 요청과 응답을 인풋으로 받아서 처리하는 서버 만들기
http.createServer( (req, res) => {
    // url 모듈을 가지고 요청데이터(req)로 받은
    // url 주소 경로이름인 pathname을 얻어냅니다.

    // 지금 예제와는 상관없지만, true라고 정한 부분이 있습니다.
    // true는 쿼리문도 함께 받아서 처리할지 물어보는 부분입니다.
    // 예시) titleId=783053
    // 쿼리스트링으로 http 요청을 보낼 때 사용자가 원하는 값을 보내는 방식입니다.
    // 데이터를 특정 할 때 쿼리스트링 번호를 이용해 사용자가 원하는 데이터가 들은
    // 경로값을 지정하는데 쓰입니다.
    const path = url.parse(req.url).pathname;
    res.setHeader(`content-type`, `text/html`);

    // /user, /input에 해당하는 컨텐츠를 준비해야합니다.
    // 사이트 이용자가 /user라고 세부주소를 입력한 경우
    if (path === `/user`) {
        res.end(`[user] name : andy, age : 30`);
    } else if (path === `/feed`) {
        res.end(`
        <meta charset="UTF-8">
            <ul>
                <li>result1</li>
                <li>result2</li>
                <li>result3</li>
            </ul>
        `)
    }
    // 만약에 사이트 이용자가 지정된 user, feed 외에
    // 잘못된 세부주소를 입력한다면?
    else {
        res.statusCode = 404;
        res.end(`page not found`);
    }
}).listen(3000, () => console.log(`세부주소까지 해보기`));