import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "./redux/slices/counterSlice";

function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Local state management</p>
     <ChildComponent/>
     
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
