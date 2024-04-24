// 별도의 자바스크립트로 코드를 빼서 실행하려면 별도로 뺀만큼

const path = require(`path`);
const fs = require(`fs`);

const filePath = path.join(__dirname, `..`, `data`, `restaurants.json`);

// json 데이터셋 내의 값을 읽어서 사용가능하게 해석ㄷ해둔 코드 파트를
// getStoredRestaurants 함수만 컴포넌트화 한 것이다.
function getStoredRestaurants() {
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    return storedRestaurants;
}

function storeRestaurants(storableRestaurants) {
    // 입력받은 데이터를 json 데이터에 기록하는 기능
    fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

// 별도 파일안의 결과들은 파일 밖으로 내보낸다는 명령어가 있어야
// 외부에서 지금 코드의 함수에 접근하여 사용할 수 있습니다.
// export의 의미가 수출입니다.
module.exports = {
    getStoredRestaurants: getStoredRestaurants,
    storeRestaurants: storeRestaurants
}