import { createContext, useState, type ReactNode } from "react";

interface CounterProviderProps {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext<CounterProviderProps | undefined>(
  undefined
);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);

  return (
    <CounterContext.Provider
      value={{ count, handleIncrement, handleDecrement }}
    >
      {children}
    </CounterContext.Provider>
  );
};
