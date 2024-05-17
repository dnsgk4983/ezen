// import { useSearchParams } from "react-router-dom";
import Header from '../component/Header';
import Button from '../component/Button';
import Editor from '../component/Editor';
import { useState, useContext, useEffect } from 'react';
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from '../util';
import DiaryList from '../component/DiaryList';
const Home = () => {
  const data = useContext(DiaryStateContext);
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("sort"));

  // let button_type1 = "버튼 글자데이터9999";
  // const button_action1 = () => {
  //   alert("가능");
  // }
  // let button_type = "negative";

  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);
  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;

  useEffect( () => {
    if(data.length >= 1) {
      // 월초 월말 구분하는 함수를 불러온다.
      const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate);
      // 불러온 함수로 월초와 월말에 해당하는 데이터만 남긴다
      setFilteredData(data.filter( (it) => beginTimeStamp <= it.date && it.date  <= endTimeStamp ))
    } else {
      setFilteredData([])
    }
    // 해당 작업을 데이터 혹은 날짜가 바뀔때마다 필터함수를 실행시켜서
    // 데이터를 월초 월말로 분류한다.
  }, [data, pivotDate])

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1));
  }
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1));
  }
  
  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={
        <Button text="<" type="positive" onClick = {onDecreaseMonth} />
        } 
        rightChild={
          <Button text=">" type="negative" onClick = {onIncreaseMonth} />
        }
      />
      {/* <Editor onSubmit={() => {alert("제출하셨습니다.")}} /> */}
      <DiaryList data={filteredData} />
    </div>
  )
}

export default Home;