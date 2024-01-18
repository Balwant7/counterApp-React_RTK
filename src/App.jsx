import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Center from "./components/Center";
import Controls from "./components/Controls";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="px-4 py-5 my-5 text-center outerdiv">
        <Header />
        <div className="col-lg-6 mx-auto">
          <Center />
          <Controls />
        </div>
      </div>
    </>
  );
}

export default App;
