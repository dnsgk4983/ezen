import "./Body.css";

const Body = ({name, location, foodList}) => {
    // props라 쓰면서 전체 데이터셋을 다 가져올 필요 없이
    // 받을때 데이터를 선택해서 받을 수 있습니다.
    const numA = 8;
    const numB = 16;
    const objA = {
        aaa: 1,
        bbb: 2
    }
    // props로 전달된 데이터가 여러개인 경우
    // props의 구성요소를 나열하여 사용하실 수 있습니다.
    // 구조분해할당 방식(객체를 분해해서 원하는 데이터 얻기)
    return (
        <div className="body">
            <h1>바디 태그입니다.</h1>
            <p>{name}과정은 {location}에 있습니다.</p>
            <p>{foodList.length}개 메뉴가 있네요</p>
            <p>저는 {foodList[2]}를 먹겠습니다.</p>
        </div>
    
    )

    {/* 삼항연산자의 if문 처리 시 코딩법 */}
    // if(numB % 2 === 0) {
    //     return (
    //     <div>{numB}는 짝수</div>
    // )
    // } else {
    //     return (
    //         <div>{numB}는 홀수</div>
    //     )
    // }
}

// 기본값을 설정하는 방법입니다.
// 기본값이 비어있다로 나타내서 코딩 중간에 데이터 부재로 
// 어려움을 겪지 않도록 할 수 있습니다.
Body.defaultProps = {
    foodList: [],
}

export default Body;