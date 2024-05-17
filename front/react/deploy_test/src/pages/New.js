import { useNavigate } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  const onSubmit = (data) => {
    // const {date, content, emotionId} = data;
    onCreate(data.date, data.content, data.emotionId);
    navigate("/", {replace: true});
  }
  return (
    <div>
      <Header 
        title={"새 일기 쓰기"}
        leftChild={<Button text={"뒤로가기"} onClick={goBack} />}
        rightChild={<Button text={"저장하기"} />} 
      />
      <Editor onSubmit={onSubmit} />
    </div>
  )
}
  
export default New