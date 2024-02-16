import { useState, useMemo } from "react";

// function for computing extensive value

function computeExtensiveValue(a, b) {
  console.log("function is called with : " + a, b);
  return a + b ** 2;
}

const UseMemo = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  //   memoize the result ofcomputeExtensive() function

  const result = useMemo(() => computeExtensiveValue(a, b), [a, b]);
  return (
    <div>
      <p>{result}</p>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />
    </div>
  );
};
export default UseMemo;
