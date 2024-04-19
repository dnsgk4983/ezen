const http = require(`http`);
const url = require(`url`); 
http.createServer( (req, res) => {
    const path = url.parse(req.url).pathname;
    res.setHeader(`content-type`, `text/html`);
    if (path === `/user`) {
        user(req, res);
    } else if (path === `/feed`) {
        feed(req, res);
    }
    else {
        notFound(req, res);
    }
}).listen(3000, () => console.log(`세부주소까지 해보기`));

// user라는 세부주소에 실행될 내용을 user 함수 안에 넣고 함수를 만들어서 함수쓰기
const user = (req, res) => {
    // url의 query 부분을 user 함수의 인풋값으로 받습니다.
    const userInfo = url.parse(req.url, false);
    res.end(`[user] name : ${userInfo.name}, age : ${userInfo.age}`);
};

const feed = (req, res) => {
    res.end(`
        <meta charset="UTF-8">
        <ul>
            <li>result1</li>
            <li>result2</li>
            <li>result3</li>
        </ul>
    `)
}

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end(`page not found`);
}