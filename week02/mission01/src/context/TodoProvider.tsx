// /* eslint-disable react-refresh/only-export-components */
// import { createContext, useContext, useState, type ReactNode } from "react";

// type Todo = {
//   id: number;
//   text: string;
// };

// interface TodoProviderProps {
//   todoList: Todo[];
//   doneList: Todo[];
//   input: string;
//   handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   // handleComplete: () => voiad;
//   // handleDelete: () => void;
// }

// // interface CounterProviderProps {
// //   count: number;
// //   handleIncrement: () => void;
// //   handleDecrement: () => void;
// // }

// export const TodoContext = createContext<TodoProviderProps | undefined>(
//   undefined
// );

// // export const CounterContext = createContext<CounterProviderProps | undefined>(
// //   undefined
// // );

// export const TodoProvider = ({ children }: { children: ReactNode }) => {
//   const [todoList, setTodoList] = useState<Todo[]>([]);
//   const [doneList, setDoneList] = useState<Todo[]>([]);
//   const [input, setInput] = useState("");

//   const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//   };

//   const handleComplete = () => {
//     setDoneList((prev) => [item, ...prev]);
//     setTodoList(todoList.filter((todo) => todo !== item));
//   };

//   const handleDelete = () =>
//     setDoneList(doneList.filter((todo) => todo !== item));

//   return (
//     <TodoContext.Provider value={{ todoList, doneList, input, handleOnChange }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

// export const useTodo = () => {
//   const context = useContext(TodoContext);
//   if (!context) {
//     throw new Error("useTodo는 반드시 TodoProvider 내부에서 사용되어야 합니다");
//   }
//   return context;
// };

// // export const CounterProvider = ({ children }: { children: ReactNode }) => {
// //   const [count, setCount] = useState(0);

// //   const handleIncrement = () => setCount((prev) => prev + 1);
// //   const handleDecrement = () => setCount((prev) => prev - 1);

// //   return (
// //     <CounterContext.Provider
// //       value={{ count, handleIncrement, handleDecrement }}
// //     >
// //       {children}
// //     </CounterContext.Provider>
// //   );
// // };
