import './TodoList.css';
import TodoItem from './TodoItem';
import { useState } from 'react';

const TodoList = ({ todo, onDelete }) => {
    // 검색 초기데이터는 빈칸
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    // 필터링 함수를 하나 만듭니다.
    const getSearchResult = () => {
        // 검색창이 빈칸이면 데이터 전체를 표시하고
        // 아니면 검색창 안의 데이터를 전부 소문자로 바꿔서 
        // 일치하는 부분이 있는 데이터만 남깁니다.
        return search === "" 
        ? todo 
        : todo.filter((it) => 
            it.content.toLowerCase().includes(search.toLowerCase()) )
    }

    return (
        <div className="TodoList">
            <h4>할 일 리스트</h4>
            <input className="searchbar" placeholder="검색어를 입력하세요" value={search} onChange={onChangeSearch} />
            <div className="list_wrapper">
                {getSearchResult().map((it) => (
                    <TodoItem key={it.id} {...it} onDelete={onDelete} />
                ))}
            </div>
        </div>
    )
}

export default TodoList;