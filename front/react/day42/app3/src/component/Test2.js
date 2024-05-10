import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        case "INIT":
            return 0;
        case "HUNDRED":
            return 100;
        default:
            return state;
    }
}

const Test2 = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch({type: 'INCREASE', data: 1})}>++</button>
            <button onClick={() => dispatch({type: 'DECREASE', data: 1})}>--</button>
            <button onClick={() => dispatch({type: 'INIT' })}>리셋</button>
            <button onClick={() => dispatch({type: 'HUNDRED'})}>100</button>
        </div>
    )
}
// import { useState } from "react";

// const Test2 = () => {
//     const [count, setCount] = useState(0);

//     const onIncrease = () => {
//         setCount(count+1);
//     }
//     const onDecrease = () => {
//         setCount(count-1);
//     }
//     const resetCount = () => {
//         setCount(0);
//     }
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={onIncrease}>++</button>
//         <button onClick={resetCount}>reset</button>
//         <button onClick={onDecrease}>--</button>
//     </div>
//   )
// }
export default Test2;