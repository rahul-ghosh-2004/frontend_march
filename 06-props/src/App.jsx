import React, { useState } from "react";
import Greeting from "./components/Greeting";

const App = () => {
  let [data, setData] = useState(10)

  const increseValue = () => {
    setData(data = data + 1)
    console.log(data);
  }

  const decreseValue = () => {
    setData(data = data - 1)
  }
  return (
    <div>
      {/* <Greeting name={"KHUSI"}/> */}
      <button onClick={increseValue}>Add</button>
      <p>
        { data }
      </p>
      <button onClick={decreseValue}>Minus</button>
    </div>
  )
}

export default App