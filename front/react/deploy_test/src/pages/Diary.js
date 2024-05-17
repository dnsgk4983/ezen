import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Button from "../component/Button";
import Header from "../component/Header";
import { getFormattedDate } from "../util";
import Viewer from "../component/Viewer";

const Diary = () => {
    const { id } = useParams();
    const data = useDiary(id);
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1)
    }

    const goEdit = () => {
      navigate(`/edit/${id}`);
    }

    if (!data) {
      return <div>아직 데이터가 들어오지 않았습니다.</div>
    } else {
      const {emotionId, content} = data;
      const title = `${new Date().toLocaleDateString()} 기록`;
      return <div>
          <Header title={title} leftChild={<Button text={"뒤로가기"} onClick={goBack} />} rightChild={<Button onClick={goEdit} text={"수정하기"} />} />
          {id}번째 diary 입니다.
          <Viewer emotionId={emotionId} content={content}/>
        </div>
    }
  }
  
  export default Diary