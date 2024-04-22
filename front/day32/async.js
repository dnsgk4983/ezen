const axios = require(`axios`);

async function get20movies() {
    const url = `https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json`;
    try {
        const result = await axios.get(url);
        // 정보의 결과값은 data 객체형식의 데이터 프로퍼티가 있다.
        const { data } = result
        // url 안에 articleList 키 값이 없거나 키 값안에 value 데이터가 없다면 에러를 표시한다.
        if (!data.articleList || data.articleList.size == 0) {
            throw new Error(`데이터가 없어요`);
        }
        const movieinfos = data.articleList.map((article, idx) => {
            return {title: article.title, rank: idx + 1}
        });
        for (let movieinfo of movieinfos) {
            console.log(`[${movieinfo.rank}위], ${movieinfo.title}`)
        }
    }
    catch (err) {
        throw new Error(err)
    }
}

get20movies()