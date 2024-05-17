import Header from "../component/Header" 
import Button from "../component/Button"
import Editor from "../component/Editor" 
import Test2 from "../component/Test2" //추가 <Test2 />
const Home = () => {
    return (<div>
        <Header 
        title={"홈주소입니다"}

        leftChild={
            <Button
            color_type="positive"  
        text="기분이 좋아"
        onClick={ () => {alert("기분 좋네")}  } />
        }

        rightChild={
            <Button
            color_type="negative"
        text="기분이 안좋아"
        onClick={ () => {alert("기분 안좋네")}  } />
        }
        />
        <Test2 /> 
        <Editor onSubmit={() => { alert("제출하셨군여")}}/>
        
        </div>)
}

export default Home;