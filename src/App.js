import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { showArray, UpdateArray } from './actinos/array-operations';

function App() {
  const dispatch = useDispatch()
  const array = useSelector(state => state) // this variable stores the value of global state i.e. contains array & size.

  function show() {
    dispatch(showArray());
    console.log(array) 
  }

  function update() {
    const size = Math.floor(Math.random() * 10) // generates a random number as size.
    dispatch(UpdateArray(size));
    console.log('Updated array: ', array);
  }

  return (
    <div className="App">
      <input type='button' value='Show Array' onClick={show} />
      <input type='button' value='Update Array' onClick={update} />
    </div> 
  );
}

export default App;
