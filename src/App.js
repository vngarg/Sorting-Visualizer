import "./App.css";
import Slider from "./components/slider";
import SelectionSort from "./sorting/selection-sort/selection";
import InsertionSort from "./sorting/insertion-sort/insertion";
import Bubble from "./sorting/bubble-sort/Bubble";
import './index.css';

function App() {
  return (
    <div className="App">
      <h1 className='heading text-center mt-3 mb-3'>Sorting Visualizer</h1>
      <div className='mainDiv'>Main Content</div>
      <Slider />
      <div className="container-fluid text-center mb-5 buttonGroup">
        <div className="row">
          <div className="col-lg-4">
            <SelectionSort />
          </div>
          <div className="col-lg-4">
            <InsertionSort />
          </div>
          <div className="col-lg-4">
            <Bubble />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
