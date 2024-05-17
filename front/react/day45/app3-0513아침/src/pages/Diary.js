import { useParams } from "react-router-dom"

const Diary = () => {
    const { id } = useParams();
    
    return <div>{ id }번째 diary 입니다</div>
}

export default Diary;