import React from "react";
import { useSelector } from "react-redux";

const Center = () => {
  const { counterVal } = useSelector((store) => store.counter); // prev: const counter = useSelector((store) => store.counter);
  // const selectedcounter = counter.counterVal;

  return <p className="lead mb-4">Counter current Value:{counterVal}</p>;
};

export default Center;
