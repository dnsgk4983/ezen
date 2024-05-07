import './App.css';
import Viewer from './component/Viewer';

function App() {
  const test11 = {
    a: 1
  }
  return (
    <div className="App">
      <h2>Hi,</h2>
      {/* <h3>{test11}</h3> */}
      <section>
        <Viewer />
      </section>
    </div>
  );
}

export default App;