const http = require(`http`);
const url = require(`url`);

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader(`Content-Type`, `text/html; charset=utf-8`);

    if(path === `/user`) {
        user(req, res);
    }
    else if(path === `/feed`) {
        feed(req, res);
    } else {
        res.statusCode = 404;
        notFound(req, res);
    }
}).listen(`3000`, () => console.log(`서버 업로드 완료`));

const user = (req, res) => {
    res.end(`user name ===> name : 디지털 수업, age : 30`);
}

const feed = (req, res) => {
    res.end(`
        <ul>
            <li>다국어테스트1</li>
            <li>다국어테스트2</li>
            <li>다국어테스트3</li>
        </ul>
    `)
}

const notFound = (req, res) => {
    res.end(`404 page not found`);;
}