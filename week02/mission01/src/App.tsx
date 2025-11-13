import "./App.css";

import Todo from "./components/Todo";

function App() {
  return (
    <Todo />
    // <main className="w-full h-screen flex justify-center items-center">
    //   <section className="w-[600px] p-10 flex flex-col items-center gap-4 rounded-md shadow-lg shadow-cyan-500/50">
    //     <h1 className="text-4xl font-bold">Issac's TODO</h1>
    //     <div className="w-full flex gap-2">
    //       <input
    //         onChange={handleOnChange}
    //         value={input}
    //         className="w-full h-14 px-4 border-2 border-gray-300 rounded-md text-xl font-semibold"
    //         placeholder="할 일 입력"
    //       />
    //       <button
    //         onClick={handleOnClick}
    //         className="shrink-0 px-5 py-0.5 text-white rounded-xl cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700"
    //       >
    //         할 일 추가
    //       </button>
    //     </div>
    //     <div className="w-full flex justify-between gap-2">
    //       <div className="w-full flex flex-col justify-start items-center flex-1">
    //         <h2 className="text-2xl font-semibold">할 일</h2>
    //         <ul className="w-full flex flex-col gap-2">
    //           {todoList.map((item) => (
    //             <li
    //               key={item.id}
    //               className="w-full max-[300px] h-fit px-4 py-2 flex justify-between items-center gap-2 bg-gray-50 shadow-xl rounded-md"
    //             >
    //               <span className="text-xl break-all">{item.text}</span>
    //               <button
    //                 onClick={() => {
    //                   setDoneList((prev) => [item, ...prev]);
    //                   setTodoList(todoList.filter((todo) => todo !== item));
    //                 }}
    //                 className="shrink-0 px-4 py-2 text-white rounded-md cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700"
    //               >
    //                 완료
    //               </button>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //       <div className="w-full flex flex-col justify-start items-center flex-1">
    //         <h2 className="text-2xl font-semibold">완료</h2>
    //         <ul className="w-full flex flex-col gap-2">
    //           {doneList.map((item) => (
    //             <li
    //               key={item.id}
    //               className="w-full h-fit px-4 py-2 flex justify-between items-center gap-2 bg-gray-50 shadow-xl rounded-md"
    //             >
    //               <span className="text-xl break-all">{item.text}</span>
    //               <button
    //                 onClick={() =>
    //                   setDoneList(doneList.filter((todo) => todo !== item))
    //                 }
    //                 className="shrink-0 px-4 py-2 text-white rounded-md cursor-pointer bg-red-500 hover:bg-red-600 active:bg-red-700"
    //               >
    //                 삭제
    //               </button>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </section>
    // </main>
  );
}

export default App;
