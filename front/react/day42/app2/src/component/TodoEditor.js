import './TodoEditor.css';
import { useState, useRef } from 'react';
const TodoEditor = ({onCreate}) => {
    // 사용자 입력태그에 입력한 데이터를 저장할 state
    const [content, setContent] = useState("");
    const inputRef = useRef();
    // setContent 기능을 통해 입력받은 값을 업데이트 합니다
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if(!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }
    return (
        <div className="TodoEditor">
            <h4>새로운 할 일 작성하기 ✔</h4>
            <div className="editor_wrapper">
                <input ref={inputRef} placeholder="새로운 할일" value={content} onChange={onChangeContent} />
                <button type='button' onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor;