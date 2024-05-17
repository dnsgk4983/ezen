import { useEffect, useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [diary, setDiary] = useState("");
    const navigate = useNavigate();

    useEffect( () => {
        const matchDiary = data.find((it) => String(it.id) === String(id));
        if(matchDiary) {
            setDiary(matchDiary);
        } else {
            alert("데이터 없어요");
            navigate("/", {replace: true});
        }
    }, [id, data] );

    return diary; 
};

export default useDiary;