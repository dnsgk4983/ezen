// import { useSearchParams } from "react-router-dom";
import Header from '../component/Header';
import Button from '../component/Button';
import Editor from '../component/Editor';
import Test2 from '../component/Test2';
const Home = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("sort"));

  // let button_type1 = "버튼 글자데이터9999";
  // const button_action1 = () => {
  //   alert("가능");
  // }
  // let button_type = "negative";
  
  return (
    <div>
      <Header
        title={"홈주소입니다"}
        leftChild={
        <Button text="좋음" type="positive" onClick = {() => {alert("좋음")}} />
        } 
        rightChild={
          <Button text="나쁨" type="negative" onClick = {() => {alert("나쁨")}} />
        }
      />
      <Editor onSubmit={() => {alert("제출하셨습니다.")}} />
      <Test2 />
    </div>
  )
}

export default Home