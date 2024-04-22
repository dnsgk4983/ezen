// path라는 라이브러리는 node.js 자체라이브러리인데 url 세부 페이지를 생성하는데 사용한다.
const path = require(`path`);
const fs = require(`fs`);
const express = require(`express`);
const port = 3000;
const app = express();

// ejs 사용관련 코드 추가
// ejs 파일은 views 폴더로 지정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// css 적용하는 코드, public 폴더를 인식하여 html이 css를 읽을 수 있게 했다.
app.use(express.static(`public`));

// urlencoded 명령어로 json 데이터 들어오면 해석해서 쓸 수 있게 한다.
// {extended: false}는 urlencoded의 데이터 해석방식인데 false의 의미는
// 별도의 해석 패키지를 부르지 않습니다. 자체 모듈로 해석합니다.
//  자체 querystring 라이브러리를 쓴다는 의미
app.use(express.urlencoded({extended: false}));

// express 모듈을 실행해서 그 안의 get 명령어를 사용합니다.
app.get('/', (req, res) => {
    res.render(`index`);
})

// 음식점 개수 변수 정보를 restraunts.ejs 보내준다
app.get('/restaurants', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'restaurants.json');
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);
    res.render(`restaurants`, {
        numberOfRestaurants: storedRestaurants.length,
        restaurants: storedRestaurants,
    });
})

app.get('/recommend', (req, res) => {
    res.render(`recommend`);
})

// recommend 페이지 안의 폼태그를 통해 데이터를 받아야 하므로
// 웹 api 기능을 recommend 경로 안에 넣어서 데이터를 받을 수 있도록 조치합니다.
app.post('/recommend', (req, res) => {
    const restaurant = req.body;
    const filePath = path.join(__dirname, 'data', 'restaurants.json');
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    // stringify로 storedRestaurants에 restaurant를 대입하고,
    // 배열수정하는 작업을 멈춰야하기 때문에 순서를 지켜주어야한다.
    storedRestaurants.push(restaurant);
    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
    res.redirect('/confirm');
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/confirm', (req, res) => {
    res.render('confirm');
})

app.listen(port, () => console.log(`${port}번으로 서버가 구동되었습니다.`))