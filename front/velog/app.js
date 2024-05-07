const path = require(`path`);
const fs = require(`fs`);
const express = require(`express`);
const app = express();
const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(`public`));

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render(`index`);
})
// 코드 순서상 보기 편하게 restaurant을 먼저 상단에 배치합니다.
app.get('/restaurants', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'restaurants.json');
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);
    res.render(`restaurants`, {
        numberOfRestaurants: storedRestaurants.length,
        restaurants: storedRestaurants,
    });
})

// about
app.get('/about', (req, res) => {
    res.render('about');
})

// confirm
app.get('/confirm', (req, res) => {
    res.render(`confirm`);
})

// recommend
app.get('/recommend', (req, res) => {
    res.render(`recommend`);
})
app.post('/recommend', (req, res) => {
    const restaurant = req.body;
    const filePath = path.join(__dirname, `data`, `restaurants.json`);
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);
    storedRestaurants.push(restaurant);
    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
    res.redirect(`/confirm`);
}).listen(port, () => console.log(`${port} 번으로 연결되었습니다.`));