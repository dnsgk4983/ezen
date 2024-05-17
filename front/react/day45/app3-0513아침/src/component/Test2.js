// import {useReducer} from "react";

// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREASE":
//       return (state + action.data) + action.data2;  // setCount(count+1) 이거표현
//     case "DECREASE":
//       return state - action.data; // setCount(count-1) 이거표현
//     case "INIT":
//       return 0;
//     case "HUNDRED":
//       return 100;
//     default:
//       return state;
//   }
// }

// function Test2() {
//   const [count, dispatch] = useReducer(reducer, 0)

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch({type: "INCREASE", data:1, data2: "헤헤헤"})   }>++</button>
//       <button onClick={() => dispatch({type: "DECREASE", data:1})     }>--</button>
//       <button onClick={() => dispatch({type: "INIT"})    }>리셋</button>
//       <button onClick={() => dispatch({type: "HUNDRED"})     }>100gogo</button>
//     </div>
//   )

// }

// export default Test2;

// import React, { useState } from "react";

// function Test2() {
//   const [count, setCount] = useState(0);
//   const [data2, setData2] = useState("");

//   const increaseCount = () => {
//     setCount(count + 1 + data2);
//   };

//   const decreaseCount = () => {
//     setCount(count - 1);
//   };

//   const resetCount = () => {
//     setCount(0);
//   };

//   const setHundred = () => {
//     setCount(100);
//   };

//   const handleData2Change = (event) => {
//     setData2(event.target.value);
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <input
//         type="text"
//         placeholder="Enter data2"
//         value={data2}
//         onChange={handleData2Change}
//       />
//       <button onClick={increaseCount}>++</button>
//       <button onClick={decreaseCount}>--</button>
//       <button onClick={resetCount}>리셋</button>
//       <button onClick={setHundred}>100gogo</button>
//     </div>
//   );
// }

// export default Test2;



import React, { useReducer } from "react";

const initialState = {
  count: 0,
  data2: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: (state.count + 1) + (state.data2) };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "SET_HUNDRED":
      return { ...state, count: 100 };
    case "SET_DATA2":
      return { ...state, data2: action.payload };
    default:
      return state;
  }
}

function Test2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const { count, data2 } = state;

  const handleData2Change = (event) => {
    dispatch({ type: "SET_DATA2", payload: event.target.value });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <input
        type="text"
        placeholder="Enter data2"
        value={state.data2}
        onChange={handleData2Change}
      />
      <button onClick={() => dispatch({ type: "INCREMENT" })}>++</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>--</button>
      <button onClick={() => dispatch({ type: "RESET" })}>리셋</button>
      <button onClick={() => dispatch({ type: "SET_HUNDRED" })}>100gogo</button>
    </div>
  );
}

export default Test2;
