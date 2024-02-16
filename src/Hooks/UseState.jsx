import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => count > 0 && setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default UseState;
