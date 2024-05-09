import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState, useRef } from "react";

// const [todo, setTodo] = useState(mockTodo); 에
// mockTodo를 넣는 단계는 외부데이터가 들ㅇ어오는 것이므로
// 함수 실행 이전에 데이터가 들어와야 합니다.
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "풀스택 연습",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "저녁 먹기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "이마트가기",
    createDate: new Date().getTime(),
  }
]

function App() {
  // 여러종류의 데이터가 한 데 모인 배열형식임을 알림
  const [todo, setTodo] = useState(mockTodo);

  // 초기값을 3으로 정했는데 그 이유는
  // 방금 테스트데이터가 0, 1, 2를 차지하여서 뒤 숫자를 지정
  const idRef = useRef(3);

  // 사용자가 태그에 일정을 입력하면 데이터 추가하는 함수입니다.
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current, // 변동부분, 
      content,
      isDone: false,
      createDate: new Date().getTime(),
    }
    setTodo([newItem, ...todo]);
    idRef.current = idRef.current + 1;
  }

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  }

  return (
    <div className="App">
      <Header />
      {/* props로 추가기능 함수를 전달함 */}
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onDelete={onDelete} />
    </div>
  );
}

export default App;
