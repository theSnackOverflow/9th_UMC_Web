import { useState, type FormEvent } from "react";
import { type TTodo } from "../types/todo";

const Todo = () => {
  const [todoList, setTodoList] = useState<TTodo[]>([]);
  const [doneList, setDoneList] = useState<TTodo[]>([]);

  const [input, setInput] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const text = input.trim();

    if (text) {
      const newTodo: TTodo = { id: Date.now(), text };
      setTodoList((prev) => [...prev, newTodo]);
    }
    setInput("");
  };

  const handleComplete = (todo: TTodo) => {
    setDoneList((prev) => [todo, ...prev]);
    setTodoList((prevTodoList: TTodo[]) =>
      prevTodoList.filter((t) => t !== todo)
    );
  };

  const handleDelete = (todo: TTodo): void => {
    setDoneList((prevDoneList: TTodo[]) =>
      prevDoneList.filter((t) => t.id !== todo.id)
    );
  };

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <section className="w-[600px] p-10 flex flex-col items-center gap-4 rounded-md shadow-lg shadow-cyan-500/50">
        <h1 className="text-4xl font-bold">Issac's TODO</h1>
        <form onSubmit={handleSubmit} className="w-full flex gap-2">
          <input
            onChange={handleOnChange}
            value={input}
            className="w-full h-14 px-4 border-2 border-gray-300 rounded-md text-xl font-semibold"
            placeholder="할 일 입력"
          />
          <button
            type="submit"
            className="shrink-0 px-5 py-0.5 text-white rounded-xl cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700"
          >
            할 일 추가
          </button>
        </form>
        <div className="w-full flex justify-between gap-2">
          <div className="w-full flex flex-col justify-start items-center flex-1">
            <h2 className="text-2xl font-semibold">할 일</h2>
            <ul className="w-full flex flex-col gap-2">
              {todoList.map((item) => (
                <li
                  key={item.id}
                  className="w-full max-[300px] h-fit px-4 py-2 flex justify-between items-center gap-2 bg-gray-50 shadow-xl rounded-md"
                >
                  <span className="text-xl break-all">{item.text}</span>
                  <button
                    onClick={() => {
                      handleComplete(item);
                    }}
                    className="shrink-0 px-4 py-2 text-white rounded-md cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700"
                  >
                    완료
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-col justify-start items-center flex-1">
            <h2 className="text-2xl font-semibold">완료</h2>
            <ul className="w-full flex flex-col gap-2">
              {doneList.map((item) => (
                <li
                  key={item.id}
                  className="w-full h-fit px-4 py-2 flex justify-between items-center gap-2 bg-gray-50 shadow-xl rounded-md"
                >
                  <span className="text-xl break-all">{item.text}</span>
                  <button
                    onClick={() => handleDelete(item)}
                    className="shrink-0 px-4 py-2 text-white rounded-md cursor-pointer bg-red-500 hover:bg-red-600 active:bg-red-700"
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Todo;
