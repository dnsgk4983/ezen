import './Button.css';
const Button = ( {text, type, onClick} ) => {
    // 색상타입 배열에서 positive, negative
    // 타입에 대한 데이터가 있으면 원안대로 가고
    // css 유형데이터가 없으면 default 라는 세팅으로 가주세요
    const btnType = ["positive", "negative"].includes(type) ? type : "default";
    return <button type={btnType} onClick={onClick} className={["Button", `Button_${btnType}`].join(" ")}>{text}</button>
}

Button.defaultProps = {
    type: "default",
}

export default Button;