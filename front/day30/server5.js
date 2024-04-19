
// 코드의 재사용을 하고자 하는 경우 (코드 리팩토링 예제)
const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html; charset=utf-8" )
    if (path in urlMap) {
        urlMap[path](req, res);
    }

    else {
        else_kkk(req, res);
    }
})
.listen("3000", () => console.log("경로를 지정할 수 있는 라우터를 만들어보자"));

const user = (req, res) => {
    res.end("user name ===> name : 디지털수업, age : 40");
}

const user1 = (req, res) => {
    res.end("user name ===> name : 디지털수, age : 50");
}

const user2 = (req, res) => {
    res.end("user name ===> name : 디지수업, age : 60");
}

const user3 = (req, res) => {
    res.end("user name ===> name : 디수업, age : 70");
}

const user4 = (req, res) => {
    res.end("user name ===> name : 디업, age : 80");
}
const feed = (req, res) => {
    res.end(`<meta charset="UTF-8">
        <ul>
        <li>다국어되니1</li>
        <li>다국어되니1</li>
        <li>다국어되니1</li>
        </ul>`)
}

const else_kkk = (req, res) => {
    res.statusCode = 404;
    res.end('404 에러입니다. 그런건 없어요 ^^');
}

const home = (req, res) => {
    res.end("메인페이지 입니다")
}

// 객체형 데이터셋을 정의해서 객체데이터 내부에 필요한 url을 등록하여 사용함
// if절의 불필요한 사용을 막았음
const urlMap = {
    "/": home,
    "/user": user,
    "/user1": user1,
    "/user2": user2,
    "/user3": user3,
    "/user4": user4,
    "/feed": feed,
}