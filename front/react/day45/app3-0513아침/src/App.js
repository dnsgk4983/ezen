import { Routes, Route, Link  } from "react-router-dom"  // 1. Link 기능 호출
import {useReducer, useRef} from "react"; //추가
import './App.css';
import Home from "./pages/Home"
import New from "./pages/New"
import Diary from "./pages/Diary"
import Edit from "./pages/Edit"

function reducer(state, action) { //추가
  //아직은 api기능이 없으므로 현 상태를 반환하도록 조치함
  return state
}

function App() {  
  const [data, dispatch] = useReducer(reducer, []) // 추가
  const idRef = useRef(0) // 추가
  return (
    <div className="App">
      {/* Routes는 자기가 감싸는 Route컴포넌트 중에 페이지역할 컴포넌트를 별도관리함
      pages폴더를 생성
      그래서 url 주소를 가지는 화면 컴포넌트는 pages폴더로갑니다 */}
<Routes>
<Route path='/' element={<Home />} />
<Route path='/new' element={<New />} />
<Route path='/diary/:id' element={<Diary />} />
<Route path='/edit' element={<Edit />} />
</Routes>

    </div>
  );
}

export default App;
