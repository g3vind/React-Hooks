import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState("");
  async function fetchData() {
    try {
      const data = await fetch("https://dog.ceo/api/breeds/image/random");
      const res = await data.json();
      console.log(res);
      setData(res);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <h1>Loading...</h1>;
  }
  return <div>{data && <img src={data.message} alt="random dog image" />}</div>;
};

export default UseEffect;
