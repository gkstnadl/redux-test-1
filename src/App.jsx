import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add, sub } from "./redux/modules/actions";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add(Number(inputValue)));
    setInputValue(0);
  };

  const handleSub = () => {
    dispatch(sub(Number(inputValue)));
    setInputValue(0);
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />{" "}
        만큼을 <button onClick={handleAdd}>더할게요</button>{" "}
        <button onClick={handleSub}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default App;
