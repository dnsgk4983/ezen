// promise 기반 코드를 async 기반으로 변환해보자
const axios = require(`axios`);

async function getTop20Movies() {
    const url = `https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json`;
    try {
        // await으로 서버 주소에서 데이터 받아오는걸 기다립니다.
        const result = await axios.get(url);
        // 웹 주소의 결과는 데이터 속성
        const {data} = result;
        // data 안의 articleList key가 없거나 그 key 안의 값이 존재하지 않는 경우
        if (!data.articleList || data.articleList.size == 0) {
            throw new Error(`ㅗ`);
        }
        // 원하는 결과값인 영화제목과 순위를 map 명령어를 통해서 뽑아내서
        // 객체 데이터 재편성
        const movieInfos = data.articleList.map((article, idx) => {
            return { title: article.title, rank: idx + 1};
        });

        // 정리된 데이터를 for문을 이용해 출력한다.
        for (let movieInfo of movieInfos) {
            console.log(`[${movieInfo.rank}등] ${movieInfo.title}`);
        }
    }
    catch (err) {
        throw new Error(err);
    }
}

getTop20Movies();