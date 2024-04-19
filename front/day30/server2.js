// 웹 서버 안에 세부주소 구현하기 예제
const http = require(`http`);
const url = require(`url`);

http.createServer((req, res) => {
    // req인 이유
    // 이용자가 세부경로를 입력하여 컨텐츠를 요청했기 때문
    const path = url.parse(req.url, true).pathname;
    res.setHeader(`Content-Type`, `text/html; charset=utf-8`);

    if(path === `/user`) {
        res.end(`user name ===> name : 디지털 수업, age : 30`);
    }
    else if(path === `/feed`) {
        res.end(`
            <ul>
                <li>다국어테스트1</li>
                <li>다국어테스트2</li>
                <li>다국어테스트3</li>
            </ul>
        `)
    } else {
        res.statusCode = 404;
        res.end(`404 page error`);
    }
}).listen(`3000`, () => console.log(`불러들이기 완료`));