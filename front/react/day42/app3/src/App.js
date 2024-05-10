import { Routes, Route, Link } from "react-router-dom";
import { useReducer, useRef } from "react";
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

function reducer(state, action) {
  return state
}

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  return (
    <div className="App">
      {
      /* Routes는 자기가 감싸는 Route 컴포넌트 중에 페이지역할 컴포넌트를 별도관리*/
      /* pages 폴더를 생성합니다. */
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/New" element={<New />} />
        <Route path="/Diary" element={<Diary />} />
        <Route path="/Edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
