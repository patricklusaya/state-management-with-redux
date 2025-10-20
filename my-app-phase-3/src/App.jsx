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
      <p>My Users</p>
      
     <ChildComponent/>
    
    </div>
  );
}

export default App;
