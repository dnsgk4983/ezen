// 웹서버 모듈과 세부주소 모듈을 불러옵니다.
const express = require(`express`);
const url = require(`url`);

// express 모듈을 불러오고 사용할 포트번호를 변수화 합니다.
const app = express();
const port = 3000;
// urlMap으로 세부주소를 관리하는 부분이 없어졌습니다.
// 원하는 만큼 app.get 이면 전부 등록가능
// 두번째 특징은 end 대신 json으로 처리하면 utf-8이 기본으로 장착됩니다.

const home = (req, res) => {
    res.set(`Content-Type`, `text/plain`);
    res.end("메인주소입니다.")
}

const user = (req, res) => {
    const userInfo = url.parse(req.url, true).query;
    res.end(`user name ===> name : ${userInfo.name}, age : ${userInfo.age}`);
}

const feed = (req, res) => {
    res.json(
        `
            <meta charset="UTF-8">
            <ul>
                <li>다국어되니1</li>
                <li>다국어되니2</li>
                <li>다국어되니3</li>
            </ul>
        `
    )
}

app.get("/", home);
app.get("/user", user);
app.get("/feed", feed);

app.listen(port, () => console.log(`익스프레스로 라우터 리팩토링하기`));