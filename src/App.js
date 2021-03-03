import "./App.css";
import { useEffect } from "react";
import Slider from "./components/slider";
import SelectionSort from "./sorting/selection-sort/selection";
import InsertionSort from "./sorting/insertion-sort/insertion";
import Bubble from "./sorting/bubble-sort/Bubble";
import "./index.css";
import { useSelector } from "react-redux";
import RandomizeArray from "./components/RandomizeArray/RandomizeArray";

function App() {
  var size = useSelector((state) => state.arr.size);
  var array = useSelector((state) => state.arr.array);

  const CreatePillars = () => {
    var mainDiv = document.querySelector(".mainDiv");

    while (mainDiv.firstChild) mainDiv.firstChild.remove();

    for (var i = 0; i < size; ++i) {
      var element = document.createElement("div");
      element.classList.add("pillar");
      element.style.height = `${array[i]}px`;
      mainDiv.appendChild(element);
    }
  };

  useEffect(() => {
    CreatePillars();
  });

  return (
    <div className="App">
      <h1 className="heading text-center mt-3 mb-3">Sorting Visualizer</h1>
      <div className="mainDiv text-center"></div>
      <div className="row m-0 mt-4">
        <div className="col-lg-5">
          <Slider />
        </div>
        <div className="col-lg-7">
          <RandomizeArray size={size} />
        </div>
      </div>
      <div className="container-fluid text-center mt-4 buttonGroup">
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
