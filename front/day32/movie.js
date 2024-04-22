// axios 는 node.js 를 위한 promise api를 활용하는 비동기 통신 라이브러리
const axios = require(`axios`);
const url = `https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json`;

// axios를 가지고 url 변수 안의 값을 읽어들인 후, 성공하면 (result)가 인풋으로 들어가는 함수를 실행
axios.get(url).then((result) => {
    // url을 읽었는데 정상이 아니라면(200 상태가 아니라고 표시함)
    if(result.status != 200) {
        throw new Error(`페이지 요청을 실패했습니다.`);
    }
    // if문 안에 조건 result.data 라고 써있으면 무슨뜻이다?
    // 데이터가 존재한다는 의미이고 그 존재하는 데이터 자체를 반환시킨다.
    if(result.data) {
        return result.data;
    }
    // 상태는 정상이라 하긴 하는데 반환할 데이터가 없을 때
    throw new Error(`데이터가 없어요`);
}).then((data) => { // .then을 보아 데이터가 들어오는 경우에만 실행하란 의미를 알 수 있다.
    // url 안에 articleList 키 값이 없거나 키 값 안에 value 데이터가 없다면 에러표시
    if(!data.articleList || data.articleList.size == 0) {
        throw new Error(`데이터가 없어요`);
    }
    // 데이터가 있으면 출력한다.
    return data.articleList;
}).then((articles) => { // data.articleList가 잘 들어왔을 때 이를 인풋으로 하는 함수실행
    // 입력된 data.articleList는 함수 정의 할 때 articles로 개명한다.
    return articles.map((article, idx) => {
        // 입력받은 data.articleList를 다시 분해하여 영화제목이 들은 title 키 값을 찾아내고
        // 영화 순위를 위해 데이터의 인덱스값을 불러낸다 이를 article, idx로 다시 개명한다.
        return {title: article.title, rank: idx + 1}
    })
}).then((results) => { // 영화의 제목과 순위를 뽑았으면 이를 results 인풋변수에 넣고 함수실행
    // 이를 results 인풋변수에 넣고 함수 실행
    // 원하는 결과 데이터는 입수했으니 입수한 데이터를 사용자에게 보이도록 출력이 필요
    // 지금 데이터는 1 ~ 20위 까지의 객체데이터이므로 하나씩 추출하여 출력해야한다.
    // for 문을 사용하여 데이터를 하나씪 읽어온다.
    for (let movieInfo of results) {
        console.log(`[${movieInfo.rank}위], ${movieInfo.title}`);
    }
}).catch((err) => { // 마지막으로 에러 발생 시, 던져진 에러객체에 대한 처리법을 코딩한다.
    console.log(`에러발생`, err);
    // 준비해둔 에러객체를 받아서 표현한다
});