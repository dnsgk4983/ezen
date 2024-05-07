import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Body22 from "./component/Body22";
import Body33 from "./component/Body33";
import Body44 from "./component/Body44";
import Body55 from "./component/Body55";
import Body66 from "./component/Body66";
import Body77 from "./component/Body77";

function App() {
const dataset11 = {  
  name777: "풀스택", 
  location: "구월동",
  // foodList: ["라면", "김밥", "돈까스"],
} 

  return (
    <div className="App">
     <Header />
     {/* <Body {...dataset11}/> */}
     <Body22 />
     <Body33 />
     <Body44 />
     <Body55 />
     <Body66 />
     <Body77 />
     <Footer />
    </div>
  );
}

export default App;
