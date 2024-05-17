import "./DiaryList.css";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";

const sortOptioList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];
const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        // 날짜를 숫자로 변호나하여 빼줌으로 내림차순으로 최신데이터가 앞으로 오도록 한다.
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    // 최신 데이터 순서가 담긴 숫자를 기준으로 sort 명령어로 실제 분류작업
    copyList.sort(compare);
    // 분류된 데이터를 기준으로 useState 업데이트
    setSortedData(copyList);
    // 데이터 혹은 "최신순" 등의 분류기준이 바뀔때마다 정렬작업 수행
  }, [data, sortType]);
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  const navigate = useNavigate();
  const onClickNew = () => {
    navigate("/new");
  };
  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptioList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
        <div className="right_col">
          <Button type={"positive"} text={"새일기 쓰기"} onClick={onClickNew} />
        </div>
      </div>
      <div className="list_wrapper">
        {sortedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};
export default DiaryList;
