// app.js 에서 필요한거 다 불러와도 별도 파일을 벼롣 파일대로 다시 모듈을 불러야합니다.
const path = require(`path`);
const fs = require(`fs`);

const filePath = path.join(__dirname, '..', 'data', 'restaurants.json');

function getStoredRestaurants() {
    // 불러온 json 파일 경로를 가지고 파일을 읽고 해석합니다.
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    // 해석된 데이터를 반환합니다.
    return storedRestaurants

}

// 유저에게 입력받은 추가 데이터를 json 파일에 기록하는 함수로 만든다.
function storedRestaurants(xxx) {
    fs.writeFileSync(filePath, JSON.stringify(xxx));
}
// 만든 함수를 다른 코드가 불러서 쓰려면 export 구문으로 반출이 허용된 상태를 만들어야 한다.
module.exports = {
    getStoredRestaurants: getStoredRestaurants,
    storedRestaurants: storedRestaurants
}