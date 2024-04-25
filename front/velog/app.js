const path = require(`path`);
const express = require(`express`);
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const htmlFilePath = path.join(__dirname, `views`, `index.html`);
    res.sendFile(htmlFilePath);
    
})
// 코드 순서상 보기 편하게 restaurant을 먼저 상단에 배치합니다.
app.get('/restaurants', (req, res) => {
    const htmlFilePath = path.join(__dirname, `views`, `restaurants.html`);
    res.sendFile(htmlFilePath);
})

// about
app.get('/about', (req, res) => {
    const htmlFilePath = path.join(__dirname, `views`, `about.html`);
    res.sendFile(htmlFilePath);
})

// confirm
app.get('/confirm', (req, res) => {
    const htmlFilePath = path.join(__dirname, `views`, `confirm.html`);
    res.sendFile(htmlFilePath);
})

// recommend
app.get('/recommend', (req, res) => {
    const htmlFilePath = path.join(__dirname, `views`, `recommend.html`);
    res.sendFile(htmlFilePath);
}).listen(port, () => console.log(`${port} 번으로 연결되었습니다.`));