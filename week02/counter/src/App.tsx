import "./App.css";
import { useState } from "react";

import ButtonGroup from "./components/ButtonGroup";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <main className="m-auto mt-20 flex justify-center items-center">
      <section className="w-xs h-32 flex flex-col justify-center items-center gap-4 bg-gray-100 rounded-2xl">
        <h1 className="text-3xl font-bold">Count : {count}</h1>
        <ButtonGroup
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </section>
    </main>
  );
}

export default App;
