import "./Body.css"
// 이벤트 핸들링은 어떻게 하는가?
// "버튼을 클릭하셨군요"라는 메세지를 띄우는 handleOnClick() 함술르 정의
// button 태그에 마우스 클릭 시 handleOnClick 함수가 켜지도록 합니다.
const Body22 = () => {
    
    function handleOnClick33(e) {
        console.log(e.target.name);
    }
    function handleOnClick() {
        alert("버튼을 클릭하셨군요");
    }
    return (
        <div className="body">
            <button name="a버튼" onClick={handleOnClick}>클릭</button>
            <button name="b버튼" onClick={handleOnClick33}>클릭3</button>
        </div>
    )
}

export default Body22;