import "./App.css";

import ButtonGroup from "./components/ButtonGroup";
import { useCount } from "./context/CounterProvider";

function App() {
  const { count } = useCount();

  return (
    <main className="m-auto mt-20 flex justify-center items-center">
      <section className="w-xs h-32 flex flex-col justify-center items-center gap-4 bg-gray-100 rounded-2xl">
        <h1 className="text-3xl font-bold">Count : {count || 0}</h1>
        <ButtonGroup />
      </section>
    </main>
  );
}

export default App;
