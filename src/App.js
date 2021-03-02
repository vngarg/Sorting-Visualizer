import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { showArray } from "./actinos/array-operations";
import Slider from "./components/slider";
import SelectionSort from "./sorting/selection-sort/selection";
import InsertionSort from './sorting/insertion-sort/insertion';
import Bubble from "./sorting/bubble-sort/Bubble";

function App() {
  const dispatch = useDispatch();
  const array = useSelector((state) => state.arr.array); // this variable stores the value of global state i.e. contains array.

  function show() {
    console.log(array);
  }

  return (
    <div className="App">
      <input type="button" value="Show Array" onClick={show} />
      <br />
      <Slider />
      <br />
      <SelectionSort />
      <br />
      <InsertionSort />
      <br />
      <Bubble />
    </div>
  );
}

export default App;
