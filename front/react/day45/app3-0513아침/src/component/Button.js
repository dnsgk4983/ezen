import "./Button.css"

const Button = ( {text, color_type, onClick}  ) => {
    // 색상타입 배열에서 positive, negative
    // 타입에 대한 데이터가 있으면 원안대로 가시고
    // css 유형데이터가 없다면 default라는 세팅으로 가주세요
    const btnType = ["positive", "negative"].includes(color_type)  //추가
    ? color_type : "default";

    return <button className= { ["Button", `Button_${btnType}`].join(" ")} 
    onClick={onClick}  > {text} </button>
}

Button.defaultProps = {  // 추가
    color_type: "default",
}

export default Button;